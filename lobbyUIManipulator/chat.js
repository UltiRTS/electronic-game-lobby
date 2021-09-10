window.channelLastAuthor = {}

function msgPut(Q) {
	//Q[0]=user;1=msg;2=channel
	
	chatGemPut(Q[2])
	var timeLocal = ''
	var amorPm=''

	if (window.chatUpdate["chatUserContent" + Q[2]]) {
		var d = new Date(); // for now
		if (d.getHours()>=12){amorPm='PM'}
		else{amorPm='AM'}
		//d.getMinutes(); // =>  30
		//d.getSeconds();
		timeLocal = String(d.getHours()) + ':' + String(d.getMinutes())
		window.chatUpdate["chatUserContent" + Q[2]] = false
		setTimeout(() => { window.chatUpdate["chatUserContent" + Q[2]] = true }, 20000)
		//console.log('logging time for '+"chatUserContent"+Q[2])
	}

	if (Q[2] == 'bus') {

		if (window.channelLastAuthor[Q[2]] == Q[0]) { _msgWrite(Q[2], Q[0], 'THEA_EXEC()', Q[1], timeLocal,amorPm, false) }
		else { _msgWrite(Q[2], Q[0], 'THEA_EXEC()', Q[1], timeLocal,amorPm, true) }
	}
	else {
		label = 'Thea Pharmaeuticals Inc.'
		if (Q[1].includes(window.username) && Q[0] != window.username) { label = 'REPLY' }

		if (window.channelLastAuthor[Q[2]] == Q[0]) { _msgWrite(Q[2], Q[0], label, Q[1], timeLocal,amorPm, false) }
		else { _msgWrite(Q[2], Q[0], label, Q[1], timeLocal,amorPm, true) }
	}

	if (document.none && Q[2] != 'bus') {
		playFX('notif.ogg', true)
	}

	window.channelLastAuthor[Q[2]] = Q[0]
}

function _msgWrite(channel, author, label, msg, timeLocal,amorPm, isNewAuthor = true) {

	if (isNewAuthor) {
		if (author.startsWith("Autohost")) {


			newLiner = document.createElement("div");
			newLiner.innerHTML = '<p style="/* mix-blend-mode:screen; */z-index:1;left:8px;padding: 6px;font-size: 38px;height:15px;position:relative;top:0px;display:inline-block;color: #2196f370;/* background-color: rgb(33 150 243 / 31%); */padding-bottom: 15px;margin:0;backdrop-filter: blur(58px);font-weight:900;">' + 'THEA' + '</p><p style="mix-blend-mode:screen;padding: 18px;padding-left: 82px;font-size: 13px;height:15px;left: 9px;position:relative;top: -2px;display:inline-block;color: #ffffffab;background-color: rgb(255 150 33 / 11%);z-index:-1;/* font-family:JuneBug6; */font-weight:900;padding-bottom: 3px;margin:0;/* backdrop-filter: blur(58px); */">' + 'SYSTEM' + '</p><p class="actualMsg" style="position:relative;color: #ffffff9c;margin:0px;width:90%;word-wrap: break-word;">' + msg + '</p><div class="highlightedMsg" style="position:absolute;left:-2px;height:100%;width:5px;top:4%;"></div><div style="margin:0;right: 1.5vw;position:absolute;height: 65px;color:white;opacity: 0.3;font-size: 48px;font-weight:900;bottom:0%;overflow:hidden;z-index:10;/* backdrop-filter: opacity(20%); *//* background:red; *//* backdrop-filter: blur(100px); */"><p style="position:relative;margin:0;font-size: 47px;top: -7px;">' + timeLocal + '</p><p style="position:relative;margin:0;font-size: 31px;top: -20px;">'+amorPm+'</p></div>'
			newLiner.className = 'singleUserMsg'
			newLiner.style.cssText = 'position:relative;width:100%;left:0%;'
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)
			newLiner = document.createElement("br");
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)
		}



		else if (label == 'REPLY') {


			newLiner = document.createElement("div");
			newLiner.innerHTML = '<p style="/* mix-blend-mode:screen; */z-index:1;left:8px;padding: 6px;font-size: 38px;height:15px;position:relative;top:0px;display:inline-block;color: #2196f370;/* background-color: rgb(33 150 243 / 31%); */padding-bottom: 15px;margin:0;backdrop-filter: blur(58px);font-weight:900;">' + author + '</p><p style="mix-blend-mode:screen;padding: 18px;padding-left: 82px;font-size: 13px;height:15px;left: 9px;position:relative;top: -2px;display:inline-block;color: #ffffffab;background-color: rgb(255 150 33 / 11%);z-index:-1;/* font-family:JuneBug6; */font-weight:900;padding-bottom: 3px;margin:0;/* backdrop-filter: blur(58px); */">' + label + '</p><p class="actualMsg" style="position:relative;color: #ffffff9c;margin:0px;width:90%;word-wrap: break-word;">' + msg + '</p><div class="highlightedMsg" style="position:absolute;left:-2px;height:100%;width:5px;top:4%;"></div><div style="margin:0;right: 1.5vw;position:absolute;height: 65px;color:white;opacity: 0.3;font-size: 48px;font-weight:900;bottom:0%;overflow:hidden;z-index:10;/* backdrop-filter: opacity(20%); *//* background:red; *//* backdrop-filter: blur(100px); */"><p style="position:relative;margin:0;font-size: 47px;top: -7px;">' + timeLocal + '</p><p style="position:relative;margin:0;font-size: 31px;top: -20px;">'+amorPm+'</p></div>'

			newLiner.style.cssText = 'position:relative;width:100%;left:0%;'
			newLiner.className = 'singleUserMsg'
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)
			newLiner = document.createElement("br");
			document.getElementById("chatUserContent" + channel).appendChild(newLiner)

		}
		else {
			newLiner = document.createElement("div");
			newLiner.innerHTML = '<p style="/* mix-blend-mode:screen; */z-index:1;left:8px;padding: 6px;font-size: 38px;height:15px;position:relative;top:0px;display:inline-block;color: #2196f370;/* background-color: rgb(33 150 243 / 31%); */padding-bottom: 15px;margin:0;backdrop-filter: blur(58px);font-weight:900;">' + author + '</p><p style="mix-blend-mode:screen;padding: 18px;padding-left: 82px;font-size: 13px;height:15px;left: 9px;position:relative;top: -2px;display:inline-block;color: #ffffffab;background-color: rgb(200 200 200 / 11%);z-index:-1;/* font-family:JuneBug6; */font-weight:900;padding-bottom: 3px;margin:0;/* backdrop-filter: blur(58px); */">' + label + '</p><p class="actualMsg" style="position:relative;color: #ffffff9c;margin:0px;width:90%;word-wrap: break-word;">' + msg + '</p><div class="ordinaryMsg" style="position:absolute;left:-2px;height:100%;width:5px;top:4%;"></div><div style="margin:0;right: 1.5vw;position:absolute;height: 65px;color:white;opacity: 0.3;font-size: 48px;font-weight:900;bottom:0%;overflow:hidden;z-index:10;/* backdrop-filter: opacity(20%); *//* background:red; *//* backdrop-filter: blur(100px); */"><p style="position:relative;margin:0;font-size: 47px;top: -7px;">' + timeLocal + '</p><p style="position:relative;margin:0;font-size: 31px;top: -20px;">'+amorPm+'</p></div>'

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
		newLiner.style.cssText = 'position: relative;left: 8px;color: #ffffff9c;margin: 0px;width: 90%;overflow-wrap: break-word;'
		document.getElementById("chatUserContent" + channel).childNodes[document.getElementById("chatUserContent" + channel).childNodes.length - 2].appendChild(newLiner)
	}

	if (!document.getElementById("chatUserContent" + channel).offsetParent === null) {  //scroll the chat
		chatWindow = document.getElementById("chatUserContent" + channel);
		var xH = chatWindow.scrollHeight;
		chatWindow.scrollTo(0, xH);

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
	loading()
}

function chatExitGem() {
	window.client.say('bus', "sysctl --exit --bid " + window.nowinBattle)
	loading()
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
		document.getElementById("chatList").innerHTML += "<div  style=\"white-space: nowrap;height:20px;margin-bottom:20px;font-size:15px;filter: drop-shadow(0.3rem 0.3rem 0.1rem rgba(33,150,243,0.7));float: right;\" id=\"chatTag" + Name + "\"><span id=\"chatTxt" + Name + "\" class=\"chatTagBody chatTagAnchor\" onclick=\"chatSwt(&#39;" + Name + "&#39;);playFX('smolButton.wav')\"style=\"cursor: pointer; color: white; padding: 5px;\">" + Name.substring(0, 6) + "</span><i id=\"chatClose\" onmouseover=\"pushToolTip('Press this [button] to [close] this chat')\" onclick=\"chatLeave(&#39;" + Name + "&#39;)\" class=\"chatClose fa fa-times-circle\" style=\"cursor: pointer;padding: 6px;\" aria-hidden=\"true\" ></i>                                              <div id='gemChat"+Name+"' style='display:none;position:absolute;transform: rotate(45deg);filter: drop-shadow(7px 0px 3px red);'><div style='position:absolute;background:rgba(243,33,33,1);rgba(243,33,33,1);height:0.5vh;width:0.5vh;top:0vh; '></div><div class='gemRing' style='position:absolute;;border: 0.1vh solid rgba(243,33,33,1);'></div></div></div>";
	}
	else {
		document.getElementById("chatList").innerHTML += "<div style=\"white-space: nowrap;height:20px;margin-bottom:20px;font-size:15px;filter: drop-shadow(0.3rem 0.3rem 0.1rem rgba(33,150,243,0.7));float: right;\" id=\"chatTag" + Name + "\"><span id=\"chatTxt" + Name + "\"  class=\"chatTagBody chatTagAnchor\" onclick=\"chatSwt(&#39;" + Name + "&#39;);playFX('smolButton.wav')\"style=\"cursor: pointer; color: white; padding: 5px;\">" + Name.substring(0, 6) + "</span><i id=\"chatClose\" onclick='pushSmolNotif(\"main\",\"Cannot close the main chat.\")' class=\"chatClose fa fa-times-circle\" style=\"cursor: pointer;padding: 6px;\" aria-hidden=\"true\" ></i>      <div id='gemChat"+Name+"' style='display:none;position:absolute;transform: rotate(45deg);filter: drop-shadow(7px 0px 3px red);'><div style='position:absolute;background:rgba(243,33,33,1);rgba(243,33,33,1);height:0.5vh;width:0.5vh;top:0vh; '></div><div class='gemRing' style='position:absolute;;border: 0.1vh solid rgba(243,33,33,1);'></div></div></div>";
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
	killAllGem('Chat'+chatName)
	
}
