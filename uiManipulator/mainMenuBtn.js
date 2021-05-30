function multiplayer()
{	if(window.zone!='lobby')
	{	document.getElementById("settings").style.visibility="hidden"
		//clearScreen(document.getElementById("settings"))
		document.getElementById("lobbyContainer").style.visibility=""
		chatSwt('main')
	window.zone='lobby'
	playSound('lobby_intro.wav',true)
	loading(true)
		if(window.isExited){
			document.getElementById("lobbyContent").style.visibility=""
			document.getElementById("prebattle").style.visibility="hidden"  }
		else{
			document.getElementById("lobbyContent").style.visibility="hidden"
			document.getElementById("prebattle").style.visibility="" 
		}
	}
	
	else if(document.getElementById("lobbyContent").style.visibility=="hidden" )
    {
        document.getElementById("lobbyContent").style.visibility=""
        document.getElementById("prebattle").style.visibility="hidden"
    }
    else if(!window.isExited){
        document.getElementById("lobbyContent").style.visibility="hidden"
        document.getElementById("prebattle").style.visibility=""  
    }

}

function settings(){

	if (window.zone!="settings"){
		//clearScreen(document.getElementById("lobbyContainer"))
		
		document.getElementById("settings").style.visibility=""
		document.getElementById("lobbyContainer").style.visibility="hidden"

		window.zone="settings"
		playSound('generalPurposeAutomatedSolution2196f3.wav',true)
		loading(true)
	}
}


	


