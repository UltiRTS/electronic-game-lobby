const Client = require("./client");


window.client = new Client();

window.client.on("ACCEPTED", (username) => {
	setInterval(() => { client.send("PING"); }, 1000);
	window.timer3 = setInterval(finalBoxEnlargeLeave, 10);
	window.username = username;
});

window.client.on("JOIN", (CHANAME) => {
	chatPut(CHANAME)
});


window.client.on("DENIED", (reason) => {
	//window.client.endConnection();
});

window.client.on("LEFT", (CHANAME,user) => {
	if (user==window.username)
	{	
		chatDel(CHANAME)}
		else if (CHANAME!="main"){
			frdEliminate(CHANAME,user);
		}
});

window.client.on("LEFTBATTLE", (bID,user) => {
	console.log("received leaving battle"+user)
	if (user==window.username){
		chatDel(bID);
		window.isExited=true;
	}
	
});

/*var usrinBattle = []*/
/*window.client.on("JOINEDBATTLE",(id, users) => {
 i f* (users==window.username){
 window.client.joinChanel(id);
 }
 
 
 });*/

var usrinChan = []
window.client.on("CLIENTS",(CHANME, users) => {
	if (CHANME!="main"){
		usrinChan = users.split(" ");
		for (var userPtr=0; userPtr<usrinChan.length;userPtr++){
			frdPut(CHANME,usrinChan[userPtr],'A\'s gem');}
	}
});

window.client.on("JOINED",(CHANME, user) => {
	if (CHANME!="main"&user!=window.username){
		frdPut(CHANME,user,'A\'s gem');
	}
});

//window.client.on("JOINEDBATTLE",(bID, users) => {
//	frdPut(bID,users,'Combat Group'+bID)
//});

window.client.on("JOINBATTLE",(bID, user) => {
	window.nowinBattle=bID;
	lobbyFlush(bID, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, document.getElementById("title"+bID).innerHTML, 0, 0);
	window.client.joinChanel(bID);
	window.isExited=false;
});

//window.client.on("CLIENTBATTLESTATUS",(usr, status,teamColor) => {
//	if (usr==window.username){
//	window.client.joinChanel(CHANAME)
//	}
//});

var msgSaid = [];
window.client.on("SAID", (channel,user,msg) => {
	msgSaid[0]=user;
	msgSaid[1]=msg;
	msgSaid[2]=channel;
	msgPut(msgSaid)
});

window.client.on("CLIENTSTATUS", (user,status) => {
	if (user.startsWith("Autohost")){
		if (status ==1)
		{
			
			runCmd('./engine/spring _script.txt', (output) => {
				console.log(output);
			});
			
		}
	}
});

window.client.on("BATTLEOPENED",(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel) => {
	console.log("BATTLE OPENED!!!!!!!!!!!!!!")
	document.getElementById("gameEntry").innerHTML+="<!--to be inserted by js--><li class = \"gameSubEntry\" style=\"display:inline;display:inline-block;position: relative;\" id=battleEntry"+battleid+"> <p id=\""+battleid+"\"onclick=\"if (window.isExited==true){window.client.joinBattle(&#39;"+battleid+"&#39;);}else{exitGem(window.nowinBattle);}\"class=\"gameInnerSubEntryTXT\" style=\"overflow: hidden; font-family: JuneBug2; position: relative; cursor:pointer;background : #2196f3;  margin: 20px ; padding: 25px; mix-blend-mode: screen; font-weight: bold;\" type=\"button\" >"+founder +"</br>"+map+"<p id=\"title"+battleid+"\" style=\"font-size: 1.5vw; color: #255784; position:absolute; top: 65px ;background-color: rgba(255,255,255,0.85); padding:2px; box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3; mix-blend-mode: screen;\">"+title+"</p></p></li><!--to be inserted by js-->"
	
});

window.client.on("BATTLECLOSED",(bID) => {
	console.log("BATTLE CLOSED!!!!!!!!!!!!!!")
	
	
	document.getElementById("battleEntry"+bID).parentNode.removeChild(document.getElementById("battleEntry"+bID));
});


