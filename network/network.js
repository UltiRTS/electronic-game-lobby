const Client = require("./network/client");
window.roomPort={}
window.roomIP={}
window.gameStatus={}
window.client = new Client();
window.polls={}
window.client.on("ACCEPTED", (username) => {
	setInterval(() => { client.send("PING"); }, 1000);
	
	window.username = username;
	window.isLoggedin = true;
	playSound('lobby_intro.wav',true)
	//loading(false)
	lobbyPresence()
	window.zone="lobby"
	
	finalBoxEnlargeLeave()
});

window.client.on("AGREEMENT", (agreement) => {
	
	regAppendAgreement(agreement);
});

window.client.on("AGREEMENTEND", () => {
	renderRegpage1()
	
});


window.client.on("JOIN", (CHANAME) => {
	
	if (CHANAME==window.nowinBattle){
		chatPut(CHANAME,'Encrypted Operation Channel',true)
		pushSmolNotif('bCOM','You have been invited to a battle chat.')
		
	}
	else if (CHANAME=='bus'){
		chatPut(CHANAME,'debug channel; unless debugging, please do not post!')
		pushSmolNotif('dCOM','You have been invited to a debug chat.')
	}
	else{
		chatPut(CHANAME)
		pushSmolNotif('cCOM','You have been invited to an encrypted chat.')
	}
	
});

window.client.on("DENIED", (reason) => {
	notice(true,'ACCESS DENIED ',reason)
	unloading()
	reverseLogin()
});

window.client.on("LEFT", (CHANAME,user) => {
	if (user==window.username)   //remove the chat if the user leaves the channel
	{	
		chatDel(CHANAME)}
	else if (CHANAME!="main"){
		frdEliminate(CHANAME,user);   //in some other cases its other user leaving the chat, remove them if they are not in main neither, since main chat user is not drawn
	}
	if (user==window.nowHostedby){   //eliminates autohost game status
		window.gameStatus[window.username]=false
	}
	if (CHANAME==window.nowinBattle){
		try{
		delete window.ppl[user]
		}
		catch(err){
			console.log('trying to remove an user thats never joined!')
		}
		
			
	}

	if (user==window.username){
		try{
		delete window.channelLastAuthor[CHANAME]
		}
		catch(err){
			console.log('trying to remove an channel hisyory that never existed!')
		}
	}
});

window.client.on("LEFTBATTLE", (bID,user) => {
	console.log("received leaving battle"+user)
	window.gameStatus[user]=false
	if (user==window.username){
		window.client.leaveChanel(bID);
		prebtlUnflush()
		
		
		
	}
	
});



/*var usrinBattle = []*/
/*window.client.on("JOINEDBATTLE",(id, users) => {
 i f* (users==window.username){
 window.client.joinChanel(id);
 }
 
 
 });*/


window.client.on("CLIENTS",(CHANME, users) => {
	usrinChan = []
	if (CHANME==window.nowinBattle)
	{
		usrinChan = users.split(" ");
		for (var userPtr=0; userPtr<usrinChan.length;userPtr++){
			
			window.ppl[usrinChan[userPtr]]={}
			window.ppl[usrinChan[userPtr]]['team']='a'
			
		}
		refreshBtlFrd()
	}
	else if (CHANME!="main"){
		usrinChan = users.split(" ");
		for (var userPtr=0; userPtr<usrinChan.length;userPtr++){
			frdPut(CHANME,usrinChan[userPtr],'A\'s gem');}
	}
});

window.client.on("JOINED",(CHANME, user) => {
		if (CHANME!="main"&user==window.username&CHANME==window.nowinBattle)
	{	
		lobbyFlush(CHANME, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, document.getElementById("title"+CHANME).innerHTML, 0, 0);
	}
	if (CHANME!="main"&user!=window.username&CHANME==window.nowinBattle)
	{	
		window.ppl[user]={}
		window.ppl[user]['team']='a';
		window.ppl[user]['haveMap']=true
		window.specppl=['']
		refreshBtlFrd()
	}
	
	else if (CHANME!="main"&user!=window.username){
		frdPut(CHANME,user,'A\'s gem');
	}
	

});

//window.client.on("JOINEDBATTLE",(bID, users) => {
//	frdPut(bID,users,'Combat Group'+bID)
//});

window.client.on("JOINBATTLE",(bID, hash) => {
	
	//console.log(user)
	//console.log(window.username)
	
	
	window.nowinBattle=bID;
	
	window.client.joinChanel(bID);
	window.isExited=false;
	//console.log('joining game')
	//console.log(	window.isExited)
	unloading()
	preBtlPresence()
});

window.client.on("CLIENTBATTLESTATUS",(usr, modbattlestatus,teamColor) => {
if (usr.startsWith('Autohost')){
	window.nowHostedby=usr   //this is spilled out first when users join a game. this could be used to tell lobby which autohost is hosting the game
}

else{             //this code here is generously contributed by MasterBel from spring
	let syncStatus = (modbattlestatus / (2 ** 22)) % 4
	if (syncStatus == 0) {
    console.log("Don't know if synced!") 
	} else if (syncStatus == 1) {
    console.log("Synced!")
	
	freundsUpdateUStats(usr, true)
	} else if (syncStatus == 2) {
		
    console.log("Not synced!")
	freundsUpdateUStats(usr, false)
	} else {
    console.log("Oops, we got " + syncStatus.toString() + ", and that's not a valid syncStatus!")
	}
	
}

});

var msgSaid = [];
window.client.on("SAID", (channel,user,msg) => {
	msgSaid[0]=user;
	msgSaid[1]=msg;
	msgSaid[2]=channel;
	msgPut(msgSaid)
	if (user==window.username){
		document.getElementById("name"+channel).value=""
	}
	if (channel == 'bus' & user!=window.username &user.startsWith('Autohost'))
		autohostNetwork(msgSaid)
	if (channel == 'bus' & !user.startsWith('Autohost')&msg.includes('sysctl'))
		pollNetwork(msgSaid)
});

window.client.on("CLIENTSTATUS", (user,status) => {

	if (parseInt(status).toString(2).endsWith(0) ) //this is needed whenever other rooms uodate their autohost status
		{
			window.gameStatus[user]=false
			//prebtlUnflush()
		}
		
		if (parseInt(status).toString(2).endsWith(1) )
		{
			window.gameStatus[user]=true
		}
		
	if (window.nowHostedby==user){ //this is needed to detect the room the user's in
		//console.log(window.nowHostedby)
		//console.log(status)
		//console.log(isExited)
		
		if (parseInt(status).toString(2).endsWith(1) &window.isExited==false&user==window.nowHostedby )
		{
			usyncWriteScript()
			lobbyFlush(window.nowinBattle, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, document.getElementById("title"+window.nowinBattle).innerHTML, 0, 0);
		}
		
		if (parseInt(status).toString(2).endsWith(0) &window.isExited==false&user==window.nowHostedby )
		{
			lobbyFlush(window.nowinBattle, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, document.getElementById("title"+window.nowinBattle).innerHTML, 0, 0);
			unloading()
		}
	}
});

window.client.on("BATTLEOPENED",(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel) => {
	//console.log("BATTLE "+title+" opened")
	window.roomPort[battleid]=port
	window.roomIP[battleid]=ip
	ipcGetMap(map)
	window.mapDic[battleid]=map
	lobbyzoneAppendBtl(battleid,map,title,founder)
	//console.log('appending '+map.substring(0,17).replace(/🦔/g, " "))
});

window.client.on("FRIENDLIST",(userName) => {
	window.freunds.push(userName.substr(9)) //'userName=someUser'
});

window.client.on("FRIEND",(userName) => {
	window.freunds.push(userName.substr(9)) //'userName=someUser'
	pushSmolNotif('Freund','Added new freund!')
	mainAllFrdRefresh()
});

window.client.on("FRIENDREQUEST",(userName,reason) => {
	pushSmolNotif('Freund','Incoming freund request!')
	homeEmailAdd2MailList('Greetings','frdReq',userName.substr(9),window.username,"Dr."+window.username+",<br>"+reason.substring(3)+"</br>Best",'')

});

window.client.on("FRIENDREQUESTLIST",(userName,reason) => {
	
	homeEmailAdd2MailList('Greetings','frdReq',userName.substr(9),window.username,"Dr."+window.username+",<br>"+reason.substring(3)+"</br>Best",'')

});

window.client.on("FRIENDLISTBEGIN",() => {
	window.freunds=[]
});

window.client.on("FRIENDLISTEND",() => {
	mainAllFrdRefresh()
});

window.client.on("UNFRIEND",(userName) => {
	mainAllFrdRefresh()
});


window.client.on("UPDATEBATTLEINFO",(bID, spec, isLocked, hash, mapName) => {
	//console.log("BATTLE CLOSED!!!!!!!!!!!!!!")
	window.mapDic[bID]=mapName
	document.getElementById(bID+'Map').innerHTML=mapName.substring(0,17).replace(/🦔/g, " ");
	if (bID==window.nowinBattle)
	{	pushSmolNotif('Map ',"Retrieving map!")
		preBtlUpdateSelfStats(false)
		ipcGetMap(mapName)
		
		
		prebattleUpdateMap(mapName.substring(0,17).replace(/🦔/g, " "))
		//loading(true,false)
		
	}
});

window.client.on("JOINBATTLEFAILED",(reason) => {notice(true,'Failed to join a battle.',reason+' [CANCEL] to leave the current battle and try again. ',preBtlExitGem)})

window.client.on("BATTLECLOSED",(bID) => {
	//console.log("BATTLE CLOSED!!!!!!!!!!!!!!")
	
	if (bID==window.nowinBattle){
		prebtlUnflush()
		window.client.leaveChanel(bID);
	}
	try{
	document.getElementById("battleEntry"+bID).parentNode.removeChild(document.getElementById("battleEntry"+bID));}
	catch(err){
		console.log('unable to remove a ghost entry!')
	}
});

window.client.on("disconnected",(bID) => {
	notice(true,'Data Expired','Press cancel to relogin.',actuallyLogMeIn)

	
	
	
})

