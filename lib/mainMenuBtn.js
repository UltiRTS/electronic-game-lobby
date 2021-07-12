function multiplayer()
{	
	if(window.zone=="campaign"){campaignUnload()}
	if(window.zone!='lobby')
	{	document.getElementById("settings").style.visibility="hidden"
		document.getElementById("campaign").style.visibility="hidden"
		//clearScreen(document.getElementById("settings"))
		document.getElementById("lobbyContainer").style.visibility=""
		chatSwt('main')
		window.zone='lobby'
		playSound('lobby_intro.wav',true)
		loading(true)
		if(window.isExited){
			document.getElementById("panel").style.visibility=""
			document.getElementById("prebattle").style.visibility="hidden"  }
		else{
			document.getElementById("panel").style.visibility="hidden"
			document.getElementById("prebattle").style.visibility="" 
		}
	}
	
	else if(document.getElementById("panel").style.visibility=="hidden" )
    {
        document.getElementById("panel").style.visibility=""
        document.getElementById("prebattle").style.visibility="hidden"
    }
    else if(!window.isExited){
        document.getElementById("panel").style.visibility="hidden"
        document.getElementById("prebattle").style.visibility=""  
    }

}

function settings(){
	if(window.zone=="campaign"){campaignUnload()}
	if (window.zone!="settings"){
		//clearScreen(document.getElementById("lobbyContainer"))
		document.getElementById("campaign").style.visibility="hidden"
		document.getElementById("settings").style.visibility=""
		document.getElementById("lobbyContainer").style.visibility="hidden"

		window.zone="settings"
		playSound('generalPurposeAutomatedSolution2196f3.wav',true)
		loading(true)
	}
}

function campaign(){
	if(window.zone=="campaign"){campaignUnload()}
	if (window.zone!="campaign"){
		//clearScreen(document.getElementById("lobbyContainer"))
		document.getElementById("settings").style.visibility="hidden"
		document.getElementById("campaign").style.visibility=""
		document.getElementById("lobbyContainer").style.visibility="hidden"
		
		window.zone="campaign"
		playSound('void.wav',true)
		loading(true)
	}
	campaignLoad()
}

	


