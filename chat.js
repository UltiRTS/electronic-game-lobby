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

function chatProposeBtl(isBattleChat=false) {
	gemTitle = document.getElementById("grabberValue").value
	//console.log("battle chat fired! Submitting cmd ");
	if(gemTitle.length > 10) gemTitle = gemTitle.substring(0,15);
	window.client.say('bus',"sysctl --host --title "+gemTitle+" --user "+window.username)
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



//  main com is joined automatically without calling any functions
function chatPut(Name, Desc="Intergalactic Quantum Com", isBattleChat=false) {   //call this function back on joining chat
	if (isBattleChat == false){
		//console.log("adding regular chat"+Name);
		if (Name!="main"){    //prevents those shit from running when called by loginbtn for the first time
			if (displayedChat!="disposed"){
				document.getElementById("chat"+displayedChat).style.visibility = "hidden";
				document.getElementById("friendFrame"+displayedChat).style.visibility = "hidden";
			}
		
			document.getElementById("infopanel").innerHTML +="<div class=\"friendFrame\" id=\"friendFrame"+Name+"\" style=\"top:-10%; overflow:visible; position: absolute; width:65%;height:120%; display:inline-block;right:35%;z-index:30;\"><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: -3%;font-family: JuneBug2;\">"+Name+"&gt; </h1><h1 style=\"display:inline-block; position: absolute; color: white; top: -15%; left: 10%;font-family: JuneBug2;\">Personnels _</h1><div class=\"friendlimitingFrame\" id=\"friendlimitingFrame"+Name+"\" style=\"top:3%; overflow:auto; position: relative; width:92%;height:91%; display:inline-block; right: -6.3%;\"></div></div>";
			}
		displayedChat=Name; //update displayed chat with the new chat
		if (Name!='main'){
			document.getElementById("chatList").innerHTML +="<p style=\"filter: drop-shadow(0.3rem 0.3rem 0.1rem rgba(33,150,243,0.7));\" id=\"chatTag"+displayedChat+"\"><span onclick=\"chatSwt(&#39;"+displayedChat+"&#39;,displayedChat)\"style=\"cursor: pointer; background-color: #2196f3;color: white; padding: 5px;\">"+displayedChat.substring(0, 6)+"</span><span onclick=\"chatLeave(&#39;"+displayedChat+"&#39;)\" id=\"chatClose\" class=\"chatClose\" style=\"cursor: pointer;\">＼</span></p>";
		}
		else {
			document.getElementById("chatList").innerHTML +="<p style=\"filter: drop-shadow(0.3rem 0.3rem 0.1rem rgba(33,150,243,0.7));\" id=\""+displayedChat+"\"><span onclick=\"chatSwt(&#39;"+displayedChat+"&#39;,displayedChat)\"style=\"cursor: pointer; background-color: #2196f3;color: white; padding: 5px;\">"+displayedChat.substring(0, 6)+"</span><span  id=\"chatClose\" class=\"chatClose\" style=\"cursor: pointer;\">⊟</span></p>";
		}
	
		document.getElementById("chatContainer").innerHTML +=" <div class=\"chatContent\" id=\"chat"+displayedChat+"\"><h1 style=\"position: absolute; color: white; top: 0%; left: 9%;font-family: JuneBug2;\">"+displayedChat+"</h1><p style=\"color: white; font-family: JuneBug3;\">"+Desc+"</p><div class=\"form__group field\" style=\"bottom:1%; width:100%; position:absolute;left:2%;\"><input onchange=\"chatSubmit()\" type=\"input\" class=\"form__field\" placeholder=\""+window.username+"\" name=\"name\" id=\'name"+displayedChat+"\' required /><label for=\"name"+displayedChat+"\" class=\"form__label\" id=\"formLabel\">"+window.username+"</label></div><div class=\"limitingframe\" style=\"width:107% ;height:78%;top:2%; overflow:scroll; overflow-x: hidden; position:relative;\"><div class=\"chatUserContent\" id=\"chatUserContent"+displayedChat+"\" style =\"bottom: 3%;position: relative; overflow: hidden;\"><!--chat content to be inserted--></div></div></div>";
	}
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
