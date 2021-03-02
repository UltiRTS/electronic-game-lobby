var displayedChat="main";


function msgPut(Q){
	 //if(username == Q[0]) {  } 
	if (Q[2]=="bus")
	{
		if(Q[0].startsWith("Autohost")){
		document.getElementById("chatUserContent"+Q[2]).innerHTML +="<p style=\"display:inline-block; color: red; font-family: JuneBug2; background-color: rgba(100, 100, 100, 0.5);\">"+Q[0]+">>></p> <p style=\"display:inline-block; color: white; font-family: JuneBug; \">"+ Q[1]+"</p></br>";}
		else{document.getElementById("chatUserContent"+Q[2]).innerHTML +="<p style=\"display:inline-block; color: green; font-family: JuneBug2; background-color: rgba(100, 100, 100, 0.5);\">"+Q[0]+">>></p> <p style=\"display:inline-block; color: white; font-family: JuneBug; \">"+ Q[1]+"</p></br>";}
		
	}
	else{
	document.getElementById("chatUserContent"+Q[2]).innerHTML +="<p style=\"display:inline-block; color: white; font-family: JuneBug2; background-color: rgba(100, 100, 100, 0.5);\">"+Q[0]+">>></p> <p style=\"display:inline-block; color: white; font-family: JuneBug; \">"+ Q[1]+"</p></br>";}
	if (Q[2]!=displayedChat||document.hidden)
	{
		playFX('notif.ogg',true)
	}
}

function chatStartBtl(){
	window.client.say('bus',"sysctl --start --bid "+window.nowinBattle)
	}

function chatVoteMap(map){
	window.client.say('bus',"sysctl --bid "+window.nowinBattle +" --map "+map)
} 
	
function chatSubmit() {
	userContent = document.getElementById("name"+displayedChat).value;
	//console.log("normal chat fired!");
	window.client.say(displayedChat,userContent)
}
window.AICounter=0

function chatAddAI(name) {
	window.AICounter+=1
	name=name+window.AICounter
	window.ppl[name]='a'
	chatAssignTeam()
	
}

function chatAIKill(AI) {
	delete window.ppl[AI]
	chatAssignTeam()
}

function chatProposeBtl(isBattleChat=false) {
	gemTitle = document.getElementById("grabberValue").value
	//console.log("battle chat fired! Submitting cmd ");
	if(gemTitle.length > 10) gemTitle = gemTitle.substring(0,15);
	window.client.say('bus',"sysctl --host --title "+gemTitle+" --user "+window.username)
	loading()
	}
	
function chatAssignTeam(){
	var playerCMD=''

	for (var key in window.ppl) {
		// check if the property/key is defined in the object itself, not in parent
		if (window.ppl.hasOwnProperty(key)) {           
			playerCMD+=key+' '+window.ppl[key]+' '
		}
	}

	window.client.say('bus',"sysctl --bid "+window.nowinBattle +" --player "+playerCMD)

	
}

function chatAssignLeader(teamLetter){
	window.client.say('bus',"sysctl --bid "+window.nowinBattle +" --leader "+teamLetter+" "+window.teamLeaders[teamLetter])
}

function chatRejoin(bID){
	window.client.say('bus',"sysctl --bid "+window.nowinBattle +" --joinasSpec")
}

function chatLeaveBtl() {
	//console.log("leave battle chat fired! Submitting cmd ");
	window.client.say('bus',"sysctl --leave --bid "+window.nowinBattle)
	}
			

function chatDel(Name) {   


	//console.log("removing "+Name+"; displayedchat is"+ displayedChat);
	document.getElementById("chatTag"+Name).parentNode.removeChild(document.getElementById("chatTag"+Name));
	document.getElementById("friendFrame"+Name).parentNode.removeChild(document.getElementById("friendFrame"+Name));
	document.getElementById('chat'+Name).parentNode.removeChild(document.getElementById('chat'+Name));
	if (Name==displayedChat)
	{
	//console.log("this is the chat that's being displayed");
	displayedChat='disposed'
	chatSwt('main',displayedChat)
	return ;
	}
	else{
		chatSwt('main',displayedChat)
	}
}

function chatLeave(Name) {   
	window.client.leaveChanel(Name)
}

function chatNotesSubmit(){
	window.client.say('bus',"sysctl --notes "+document.getElementById("hostSays").value+" --bid "+window.nowinBattle)
	
}

//  main com is joined automatically without calling any functions
function chatPut(Name, Desc="Intergalactic Quantum Com", isBattleChat=false) {   //call this function back on joining chat
	
		//console.log("adding regular chat"+Name);
		if (Name!="main"){    //prevents those shit from running when called by loginbtn for the first time
			
			if(isBattleChat){  //to differentiate battleChat freund and online users in a normal chat
				document.getElementById("infopanel").innerHTML +="<div class=\"friendFrame\" id=\"friendFrame"+Name+"\" style=\"top:-10%; overflow:visible; position: absolute; width:65%;height:120%; display:inline-block;right:35%;z-index:30;\"><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: -3%;font-family: JuneBug2;\">"+Name+" <span class=\"Add\" onclick='chatAddAI(&#39GPT_&#39)'>❱</span> </h1><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: 30%;font-family: JuneBug2;\">Personnels _</h1><div class=\"friendlimitingFrame\" id=\"friendlimitingFrame"+Name+"\" style=\"overflow-x:hidden;top:3%; y-overflow:auto; position: relative; width:92%;height:91%; display:inline-block; right: -6.3%;\"></div></div>";
			}
			else{
				document.getElementById("infopanel").innerHTML +="<div class=\"friendFrame\" id=\"friendFrame"+Name+"\" style=\"top:-10%; overflow:visible; position: absolute; width:65%;height:120%; display:inline-block;right:35%;z-index:30;\"><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: -3%;font-family: JuneBug2;\">"+Name+" ❱ </h1><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: 30%;font-family: JuneBug2;\">Personnels _</h1><div class=\"friendlimitingFrame\" id=\"friendlimitingFrame"+Name+"\" style=\"overflow-x:hidden;top:3%; y-overflow:auto; position: relative; width:92%;height:91%; display:inline-block; right: -6.3%;\"></div></div>";
			}
		document.getElementById("chatList").innerHTML +="<p style=\"filter: drop-shadow(0.3rem 0.3rem 0.1rem rgba(33,150,243,0.7));\" id=\"chatTag"+Name+"\"><span onclick=\"chatSwt(&#39;"+Name+"&#39;,displayedChat)\"style=\"cursor: pointer; background-color: #2196f3;color: white; padding: 5px;\">"+Name.substring(0, 6)+"</span><span onclick=\"chatLeave(&#39;"+Name+"&#39;)\" id=\"chatClose\" class=\"chatClose\" style=\"cursor: pointer;\">＼</span></p>";
		}
		else {
			document.getElementById("chatList").innerHTML +="<p style=\"filter: drop-shadow(0.3rem 0.3rem 0.1rem rgba(33,150,243,0.7));\" id=\""+Name+"\"><span onclick=\"chatSwt(&#39;"+Name+"&#39;,displayedChat)\"style=\"cursor: pointer; background-color: #2196f3;color: white; padding: 5px;\">"+Name.substring(0, 6)+"</span><span  id=\"chatClose\" class=\"chatClose\" style=\"cursor: pointer;\">⊟</span></p>";
		}
	
	document.getElementById("chatContainer").innerHTML +=" <div class=\"chatContent\" id=\"chat"+Name+"\"><h1 style=\"cursor: default;position: absolute; color: white; top: 0%; left: 9%;font-family: JuneBug2;\">"+Name+"</h1><p style=\"cursor: default;color: white; font-family: JuneBug3;\">"+Desc+"</p><div class=\"form__group field\" style=\"cursor: default;bottom:1%; width:97%; position:absolute;left:2%;\"><input onchange=\"chatSubmit()\" type=\"input\" class=\"form__field\" placeholder=\""+window.username+"\" name=\"name\" id=\'name"+Name+"\' required /><label for=\"name"+Name+"\" class=\"form__label\" id=\"formLabel\">"+window.username+"</label></div><div class=\"limitingframe\" style=\"display: flex;flex-direction: column-reverse; cursor: default;width:107% ;height:78%;top:2%; overflow: hidden; overflow-y:scroll; position:relative;\"><div class=\"chatUserContent\" id=\"chatUserContent"+Name+"\" style =\" cursor: text;bottom: 3%;idth:100%;position: absolute; overflow:visible\"><!--chat content to be inserted--></div></div></div>";
		if(Name=='main'){
		chatSwt(Name,'disposed')}
		else{chatSwt(Name,displayedChat)}
		displayedChat=Name;
	
}




function chatJoin()
{
	var CHANAME=document.getElementById("grabberValue").value
	window.client.joinChanel(CHANAME)
}

function chatSwt(toChat,fromChat){
        if(toChat == fromChat) { 
     	    //console.log("already on "+fromChat);
	    return;
        }
	//console.log("switching to "+toChat);
	if (fromChat!="disposed") {
		document.getElementById("chat"+fromChat).style.visibility = "hidden"; 
		document.getElementById("friendFrame"+fromChat).style.visibility = "hidden";}
	document.getElementById("chat"+toChat).style.visibility = "visible";
	
	document.getElementById("friendFrame"+toChat).style.visibility = "visible";
	//console.log("setting "+"friendFrame"+fromChat+"hidden and "+"friendFrame"+toChat+"visible")
	displayedChat=toChat;
	
}


//chatPut('topsmurfs','very competitive');
//chatPut('ultirtsTerminal','terminal');
