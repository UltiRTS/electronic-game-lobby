window.channelLastAuthor = {}

function msgPut(Q) {
	//Q[0]=user;1=msg;2=channel
	if (!document.getElementById("chatUserContent" + Q[2]).offsetParent === null) {
		chatWindow = document.getElementById("chatUserContent" + Q[2]);
		var xH = chatWindow.scrollHeight;
		chatWindow.scrollTo(0, xH);

	}
	chatGemPut(Q[2])
	timeLocal = ''


	if (window.chatUpdate["chatUserContent" + Q[2]]) {
		var d = new Date(); // for now
		d.getHours(); // => 9
		d.getMinutes(); // =>  30
		d.getSeconds();
		timeLocal = String(d.getHours()) + ':' + String(d.getMinutes())
		window.chatUpdate["chatUserContent" + Q[2]] = false
		setTimeout(() => { window.chatUpdate["chatUserContent" + Q[2]] = true }, 20000)
		//console.log('logging time for '+"chatUserContent"+Q[2])
	}

	if (Q[2] == 'bus') {

		if (window.channelLastAuthor[Q[2]] == Q[0]) { _msgWrite(Q[2], Q[0], 'THEA_EXEC()', Q[1], timeLocal, false) }
		else { _msgWrite(Q[2], Q[0], 'THEA_EXEC()', Q[1], timeLocal, true) }
	}
	else {
		label = 'Thea Pharmaeuticals Inc.'
		if (Q[1].includes(window.username) && Q[0] != window.username) { label = 'REPLY' }

		if (window.channelLastAuthor[Q[2]] == Q[0]) { _msgWrite(Q[2], Q[0], label, Q[1], timeLocal, false) }
		else { _msgWrite(Q[2], Q[0], label, Q[1], timeLocal, true) }
	}

	if (document.none && Q[2] != 'bus') {
		playFX('notif.ogg', true)
	}

	window.channelLastAuthor[Q[2]] = Q[0]
}

function _msgWrite(channel, author, label, msg, timeLocal, isNewAuthor = true) {
	if (isNewAuthor) {
		if (author.startsWith("Autohost")) {


			newLiner = document.createElement("div");
			newLiner.innerHTML = '<p style="mix-blend-mode:screen;z-index:1; left:8px; padding:2px;font-size:15px;height:15px;position:relative;top:0px;display:inline-block; color: black;background-color:rgba(33,150,243,1);">' + 'THEA' + '</p><div style="left:8px;position:relative;top:3px;height:0;display:inline-block;border-top: 9.5px solid transparent;border-bottom: 9.5px solid transparent;border-left: 10px solid rgba(33,150,243,0.9);filter: drop-shadow(0.5px 3px 1px rgba(0,0,0,0.5));"></div><p style="mix-blend-mode:screen;padding:2px;padding-left:19px;font-size:15px;height:15px;left:-2px;position:relative;top:0px;display:inline-block; color: black;background-color:rgba(255,150,33,1);z-index:-1;">' + 'SYSTEM' + '</p><div style="left:-2px;position:relative;top:3px;height:0;display:inline-block;border-top: 9.5px solid transparent;border-bottom: 9.5px solid transparent;border-left: 10px solid rgba(255,150,33,1);"></div><p class="actualMsg" style="position:relative;color: white;margin:0px;width:90%;word-wrap: break-word;">' + msg + '</p><div class="highlightedMsg" style="position:absolute;left:-2px;height:100%;width:5px;top:4%;"></div><div style="right:2.5vw;position:absolute;color:white;opacity:0.1;font-size:5vw;z-index:-1;font-weight:900;bottom:-1.5vw;;">' + timeLocal + '</div>'
			newLiner.className = 'singleUserMsg'
			newLiner.style.cssText = 'position:relative;width:100%;left:0%;'
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)
			newLiner = document.createElement("br");
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)
		}



		else if (label == 'REPLY') {


			newLiner = document.createElement("div");
			newLiner.innerHTML = '<p style="mix-blend-mode:screen;z-index:1; left:8px; padding:2px;font-size:15px;height:15px;position:relative;top:0px;display:inline-block; color: black;background-color:rgba(33,150,243,1);">' + author + '</p><div style="left:8px;position:relative;top:3px;height:0;display:inline-block;border-top: 9.5px solid transparent;border-bottom: 9.5px solid transparent;border-left: 10px solid rgba(33,150,243,0.9);filter: drop-shadow(0.5px 3px 1px rgba(0,0,0,0.5));"></div><p style="mix-blend-mode:screen;padding:2px;padding-left:19px;font-size:15px;height:15px;left:-2px;position:relative;top:0px;display:inline-block; color: black;background-color:rgba(255,150,33,1);z-index:-1;">' + label + '</p><div style="left:-2px;position:relative;top:3px;height:0;display:inline-block;border-top: 9.5px solid transparent;border-bottom: 9.5px solid transparent;border-left: 10px solid rgba(255,150,33,1);"></div><p class="actualMsg" style="position:relative;color: white;margin:0px;width:90%;word-wrap: break-word;">' + msg + '</p><div class="highlightedMsg" style="position:absolute;left:-2px;height:100%;width:5px;top:4%;"></div><div style="right:2.5vw;position:absolute;color:white;opacity:0.1;font-size:5vw;z-index:-1;font-weight:900;bottom:-1.5vw;">' + timeLocal + '</div>'

			newLiner.style.cssText = 'position:relative;width:100%;left:0%;'
			newLiner.className = 'singleUserMsg'
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)
			newLiner = document.createElement("br");
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)

		}
		else {
			newLiner = document.createElement("div");
			newLiner.innerHTML = '<p style="mix-blend-mode:screen;z-index:1; left:8px; padding:2px;font-size:15px;height:15px;position:relative;top:0px;display:inline-block; color: black;background-color:rgba(33,150,243,1);">' + author + '</p><div style="left:8px;position:relative;top:3px;height:0;display:inline-block;border-top: 9.5px solid transparent;border-bottom: 9.5px solid transparent;border-left: 10px solid rgba(33,150,243,0.9);filter: drop-shadow(0.5px 3px 1px rgba(0,0,0,0.5));"></div><p style="mix-blend-mode:screen;padding:2px;padding-left:19px;font-size:15px;height:15px;left:-2px;position:relative;top:0px;display:inline-block; color: black;background-color:rgba(200,200,200,1);z-index:-1;">' + label + '</p><div style="left:-2px;position:relative;top:3px;height:0;display:inline-block;border-top: 9.5px solid transparent;border-bottom: 9.5px solid transparent;border-left: 10px solid rgba(200,200,200,1);"></div><p class="actualMsg" style="position:relative;color: white;margin:0px;width:90%;word-wrap: break-word;">' + msg + '</p><div class="ordinaryMsg" style="position:absolute;left:-2px;height:100%;width:5px;top:4%;"></div><div style="right:2.5vw;position:absolute;color:white;opacity:0.1;font-size:5vw;z-index:-1;font-weight:900;bottom:-1.5vw;">' + timeLocal + '</div>'

			newLiner.style.cssText = 'position:relative;width:100%;left:0%;'
			newLiner.className = 'singleUserMsg'
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)
			newLiner = document.createElement("br");
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)


		}
	}

	else { // insert the thing into the last singleuser msg
		newLiner = document.createElement("p");
		newLiner.innerHTML = msg
		newLiner.style.cssText = 'position:relative;left:8px;color: white;margin:0px;width:90%;word-wrap: break-word;'
		document.getElementById("chatUserContent" + channel).childNodes[document.getElementById("chatUserContent" + channel).childNodes.length - 2].appendChild(newLiner)
	}
}

function chatStartBtl() {
	window.client.say('bus', "sysctl --start --bid " + window.nowinBattle)
}



function chatVote(cmd) {
	window.client.say('bus', cmd)
}

function chatVoteMap(map) {
	window.client.say('bus', "sysctl --bid " + window.nowinBattle + " --map " + map)
}

function chatSelectCustomMap() {
	map = document.getElementById("grabberValue").value
	window.client.say('bus', "sysctl --bid " + window.nowinBattle + " --map " + map)
}

function chatSubmit(chat, value) {
	//userContent = document.getElementById("name"+displayedChat).value;
	//console.log("normal chat fired!");
	window.client.say(chat, value)
}
window.AICounter = 0

function chatAddAI(name) {
	window.AICounter += 1
	name = name + window.AICounter
	cmd = ''
	//window.ppl[name]='a'
	//chatAssignTeam()
	for (key in window.ppl) { cmd += key + ' ' + window.ppl[key]['team'] + ' ' }
	for (key in window.ai) { cmd += key + ' ' + window.ai[key] + ' ' }
	chatAssignTeam(cmd + name + ' a')
}

function chatAddChicken(name) {
	window.AICounter += 1
	name = name + window.AICounter
	cmd = ''
	//window.ppl[name]='a'
	for (key in window.ppl) { cmd += key + ' ' + window.ppl[key]['team'] + ' ' }
	for (key in window.ai) { cmd += key + ' ' + window.ai[key] + ' ' }
	chatAssignTeam(cmd + name + ' a')

}

function chatAIKill(AI) {
	//delete window.ppl[AI]
	cmd = ''
	for (key in window.ai) {
		if (key != AI) {
			cmd += key + ' ' + window.ai[key] + ' '
		}

	}

	for (key in window.ppl) {
		cmd += key + ' ' + window.ppl[key]['team'] + ' '


	}
	chatAssignTeam(cmd)
}

function chatDismiss(name) {
	//delete window.ppl[AI]
	if (window.specppl.includes(name)) {
		window.client.say('bus', "sysctl --despec --bid " + window.nowinBattle)
	}
	else { window.client.say('bus', "sysctl --spec --bid " + window.nowinBattle) }
}

function chatProposeBtl(isBattleChat = false) {
	gemTitle = document.getElementById("grabberValue").value
	//console.log("battle chat fired! Submitting cmd ");
	if (gemTitle.length > 10) gemTitle = gemTitle.substring(0, 15);
	window.client.say('bus', "sysctl --host --title " + gemTitle + " --user " + window.username)
	loading(true)
}

function chatExitGem() {
	window.client.say('bus', "sysctl --exit --bid " + window.nowinBattle)
	loading(true)
}

function chatAssignTeam(playerCMD) {




	window.client.say('bus', "sysctl --bid " + window.nowinBattle + " --player " + playerCMD)


}

function chatAssignLeader(teamLeader) {
	window.client.say('bus', "sysctl --bid " + window.nowinBattle + " --leader " + teamLeader)
	//chatAssignTeam()
}

function chatRejoin(bID) {
	window.client.say('bus', "sysctl --bid " + window.nowinBattle + " --joinasSpec")
}

function chatLeaveBtl() {
	//console.log("leave battle chat fired! Submitting cmd ");
	window.client.say('bus', "sysctl --leave --bid " + window.nowinBattle)
}


function chatDel(Name) {


	document.getElementById("chatTag" + Name).parentNode.removeChild(document.getElementById("chatTag" + Name));
	document.getElementById("friendFrame" + Name).parentNode.removeChild(document.getElementById("friendFrame" + Name));
	document.getElementById('chat' + Name).parentNode.removeChild(document.getElementById('chat' + Name));

	chatSwt('main')

}

function chatLeave(Name) {
	window.client.leaveChanel(Name)
}

function chatNotesSubmit() {
	window.client.say('bus', "sysctl --comment " + document.getElementById("hostSays").value + " --bid " + window.nowinBattle)
	document.getElementById("hostSays").value = ''
}

//  main com is joined automatically without calling any functions
function chatPut(Name, Desc = "Intergalactic Quantum Com", isBattleChat = false) {   //call this function back on joining chat

	//console.log("adding regular chat"+Name);
	if (Name != "main") {    //prevents those shit from running when called by loginbtn for the first time

		if (isBattleChat) {  //to differentiate battleChat freund and online users in a normal chat
			document.getElementById("infopanel").innerHTML += "<div class=\"friendFrame\" id=\"friendFrame" + Name + "\" style=\"top:0%;position:absolute;left: 0px; height: 100%; width: 100%;\"><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: -3%;font-family: JuneBug2;\">" + Name + " <span class=\"Add\" onclick='chatAddAI(&#39GPT_&#39)'>█</span> <span class=\"Add\" onclick='chatAddChicken(&#39Chicken_&#39)'>█</span> </h1><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: 30%;font-family: JuneBug2;\">Personnel _</h1><div class=\"friendlimitingFrame\" id=\"friendlimitingFrame" + Name + "\" style=\"overflow-x:hidden;top:3%; y-overflow:auto; position: relative; width:92%;height:91%; display:inline-block; right: -6.3%;\"></div></div>";
		}
		else {
			document.getElementById("infopanel").innerHTML += "<div class=\"friendFrame\" id=\"friendFrame" + Name + "\" style=\"top:0%;position:absolute;left: 0px; height: 100%; width: 100%;\"><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: -3%;font-family: JuneBug2;\">" + Name + " █ </h1><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: 30%;font-family: JuneBug2;\">Personnel _</h1><div class=\"friendlimitingFrame\" id=\"friendlimitingFrame" + Name + "\" style=\"overflow-x:none;top:3%; y-overflow:auto; position: relative; width:92%;height:91%; display:inline-block; right: -6.3%;\"></div></div>";
		}
		document.getElementById("chatList").innerHTML += "<div  style=\"white-space: nowrap;height:20px;margin:10px;font-size:15px;filter: drop-shadow(0.3rem 0.3rem 0.1rem rgba(33,150,243,0.7));\" id=\"chatTag" + Name + "\"><span id=\"chatTxt" + Name + "\" class=\"chatTagBody chatTagAnchor\" onclick=\"chatSwt(&#39;" + Name + "&#39;);playFX('smolButton.wav')\"style=\"cursor: pointer; color: white; padding: 5px;\">" + Name.substring(0, 6) + "</span><span onclick=\"chatLeave(&#39;" + Name + "&#39;)\" id=\"chatClose\" class=\"chatClose\" onmouseover=\"pushToolTip('Press this [button] to [close] this chat')\"style=\"cursor: pointer;\">＼</span><div id='gemChat"+Name+"' style='display:none;position:absolute;transform: rotate(45deg);filter: drop-shadow(7px 0px 3px red);'><div style='position:absolute;background:rgba(243,33,33,1);rgba(243,33,33,1);height:0.5vh;width:0.5vh;top:0vh; '></div><div class='gemRing' style='position:absolute;;border: 0.1vh solid rgba(243,33,33,1);'></div></div></div>";
	}
	else {
		document.getElementById("chatList").innerHTML += "<div style=\"white-space: nowrap;height:20px;margin:10px;font-size:15px;filter: drop-shadow(0.3rem 0.3rem 0.1rem rgba(33,150,243,0.7));\" id=\"chatTag" + Name + "\"><span id=\"chatTxt" + Name + "\"  class=\"chatTagBody chatTagAnchor\" onclick=\"chatSwt(&#39;" + Name + "&#39;);playFX('smolButton.wav')\"style=\"cursor: pointer; color: white; padding: 5px;\">" + Name.substring(0, 6) + "</span><span  id=\"chatClose\" class=\"chatClose\" style=\"cursor: pointer;\">⊟</span><div id='gemChat"+Name+"' style='display:none;position:absolute;transform: rotate(45deg);filter: drop-shadow(7px 0px 3px red);'><div style='position:absolute;background:rgba(243,33,33,1);rgba(243,33,33,1);height:0.5vh;width:0.5vh;top:0vh; '></div><div class='gemRing' style='position:absolute;;border: 0.1vh solid rgba(243,33,33,1);'></div></div></div>";
	}

	document.getElementById("chatFrames").innerHTML += " <div class=\"\" style=\"position:absolute;left:5%;width:95%;height:100%;top:0%;\" id=\"chat" + Name + "\"><h1 style=\"cursor: default;position: absolute; color: white; top: 1vh; left: 0%;font-family: JuneBug2;font-size:3vh;border:0;margin:0;\">" + Name + "</h1><p style=\"position:absolute;top:4.5vh;left:0;cursor: default;color: white; font-family: JuneBug3;font-size:1.5vh;margin:0;\">" + Desc + "</p><div class=\"form__group field\" style=\"cursor: default;bottom:10px;; width:97%; position:absolute;left:-3%;margin:0;height:40px;\"><input onchange=\"chatSubmit('" + Name + "'," + "this.value" + ")\" type=\"input\" class=\"form__field\" placeholder=\"" + window.username + "\" name=\"name\" id=\'name" + Name + "\' required /><label for=\"name" + Name + "\" class=\"form__label\" id=\"formLabel\">" + window.username + "</label></div><div class=\"limitingframe\" style=\"display: flex;flex-direction: column-reverse;cursor: default;width:95%;height: 36vh;top: 6.4vh;overflow:hidden;overflow-y:scroll;position:absolute;\"><div class=\"chatUserContent\" id=\"chatUserContent" + Name + "\" style =\" cursor: text;bottom: 3%;width:100%;position: absolute; overflow:visible\"><!--chat content to be inserted--></div></div></div>";

	chatSwt(Name)
	//document.getElementById("chatUserContent"+Name).needTimeStamp=true
	//setTimeout(()=>{window.chatUpdate["chatUserContent"+Name]=true}, 30000)
	window.chatUpdate["chatUserContent" + Name] = true
}




function chatJoin() {
	var CHANAME = document.getElementById("grabberValue").value
	window.client.joinChanel(CHANAME)
}

function chatSwt(toChat) {
	
	//console.log("switching to "+toChat);
	//if (fromChat!="disposed") {
	//document.getElementById("chat"+fromChat).style.display = "none"; 
	//document.getElementById("friendFrame"+fromChat).style.display = "none";

	//}
	//clearScreen(document.getElementById('chatList'))
	clearScreen(document.getElementById('infopanel'))
	clearScreen(document.getElementById('chatFrames'))
	chatTags = document.getElementsByClassName('chatTagAnchor')
	for (var i = 0; i < chatTags.length; i++) {

		var child = chatTags[i];
		child.classList.remove("chatTagBodyDisplayed");
		child.classList.add("chatTagBody");

	}

	document.getElementById('chatTxt' + toChat).classList.add("chatTagBodyDisplayed");
	document.getElementById('chatTxt' + toChat).classList.remove("chatTagBody");
	document.getElementById("friendFrame" + toChat).style.display='';
	document.getElementById("chat" + toChat).style.display='';
	window.displayedChat=toChat
	chatGemKill(toChat)
}


function chatGemPut(chatName){
	if (chatName==window.displayedChat||chatName=='bus'){return}
	else{showGem('Chat'+chatName);pushSmolNotif('New Msg!',chatName+'has received a new message!');}
}

function chatGemKill(chatName){
	killGem('Chat'+chatName)
	
}