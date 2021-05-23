function multiplayer()
{	if(window.zone!='lobby')
	{	document.getElementById("settings").style.visibility="hidden"
		clearScreen(document.getElementById("settings"))
		document.getElementById("lobbyContainer").style.visibility="visible"
		chatSwt('main','disposed')
	window.zone='lobby'
	playSound('lobby_intro.wav',true)
	loading(true)
		if(window.isExited){
			document.getElementById("lobbyContent").style.visibility="visible"
			document.getElementById("prebattle").style.visibility="hidden"  }
		else{
			document.getElementById("lobbyContent").style.visibility="hidden"
			document.getElementById("prebattle").style.visibility="visible" 
		}
	}
	
	else if(document.getElementById("lobbyContent").style.visibility=="hidden" )
    {
        document.getElementById("lobbyContent").style.visibility="visible"
        document.getElementById("prebattle").style.visibility="hidden"
    }
    else if(!window.isExited){
        document.getElementById("lobbyContent").style.visibility="hidden"
        document.getElementById("prebattle").style.visibility="visible"  
    }

}

function settings(){

	if (window.zone!="settings"){
		clearScreen(document.getElementById("lobbyContainer"))
		
		document.getElementById("settings").style.visibility=""
		document.getElementById("lobbyContainer").style.visibility="hidden"

		window.zone="settings"
		playSound('generalPurposeAutomatedSolution2196f3.wav',true)
		loading(true)
	}
}


	
	function clearScreen (node) {
		for (var i = 0; i < node.childNodes.length; i++) {
			var child = node.childNodes[i];
			clearScreen(child);
			if(node.style.visibility=="visible"){node.style.visibility="hidden"}
		}
	}

