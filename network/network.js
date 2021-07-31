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
	document.getElementById("announcement").innerHTML +=agreement
	console.log("received agreement")
	loading(false)
});

window.client.on("AGREEMENTEND", () => {
	document.getElementById("loginTerminal").style.visibility = "";
	document.getElementById("loginTerminal").innerHTML +='<span class="flashit pure-button fuller-button blue" style="position:fixed; top:90%;color:white;padding:0.5%;font-weight: bold;" id="understood"  onclick="window.client.registerConfirm() ">Understood</span><span class="flashit pure-button fuller-button red" style=" position:fixed; left:30%; top:90%;color:white;padding:0.5%;font-weight: bold;" id="understood"  onclick="window.client.registerConfirm() ">Accept</span>'
																		
	document.getElementById("loginbox").style.visibility = "hidden";
	document.getElementById("postLogin").style.visibility = "hidden";
	
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
	loading(false)
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
		delete window.channelLastAuthor[chanName]
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
	loading(false)
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
			loading(false)
		}
	}
});

window.client.on("BATTLEOPENED",(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel) => {
	//console.log("BATTLE "+title+" opened")
	window.roomPort[battleid]=port
	window.roomIP[battleid]=ip
	ipcGetMap(map)
	window.mapDic[battleid]=map
	var subEntry = document.createElement('li');
	subEntry.classList.add('gameSubEntry');
	subEntry.style.width="14vw"
	subEntry.id="battleEntry"+battleid
	subEntry.innerHTML = "<p id=\""+battleid+"\"onclick=\"if (window.isExited==true){window.client.joinBattle(&#39;"+battleid+"&#39;);}else{preBtlExitGem(window.nowinBattle);}\"class=\"gameInnerSubEntryTXT\" style=\"font-size:0.7vw; overflow: hidden; font-family: JuneBug2; position: relative; cursor:pointer;background : #2196f3;  margin: 20px ; padding: 25px; mix-blend-mode: screen; font-weight: bold;\" type=\"button\" >"+founder.replace(/Autohost/g, 'missionNo') +"</br><span id=\""+battleid+"Map\">"+map.substring(0,17).replace(/🦔/g, " ")+"</span><p id=\"title"+battleid+"\" style=\"font-size: 1.5vw; color: #255784; position:absolute; top: 65px ;background-color: rgba(255,255,255,0.85); padding:2px; box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3; mix-blend-mode: screen;\">"+title+"</p></p>";
	document.getElementById("gameEntry").appendChild(subEntry);
	//console.log('appending '+map.substring(0,17).replace(/🦔/g, " "))
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

