function multiplayer()
{	
	if(window.zone=="campaign"){campaignUnload()}
	if(window.zone!='lobby')
	{	document.getElementById("settings").style.display="none"
		document.getElementById("campaign").style.display="none"
		//clearScreen(document.getElementById("settings"))
		document.getElementById("lobbyContainer").style.display=''
		chatSwt('main')
		window.zone='lobby'
		playSound('lobby_intro.wav',true)
		loading(true)
		if(window.isExited){
			document.getElementById("panel").style.display=''
			document.getElementById("prebattle").style.display="none"  }
		else{
			document.getElementById("panel").style.display="none"
			document.getElementById("prebattle").style.display='' 
		}
	}
	
	else if(document.getElementById("panel").style.display=="none" )
    {
        document.getElementById("panel").style.display=''
        document.getElementById("prebattle").style.display="none"
    }
    else if(!window.isExited){
        document.getElementById("panel").style.display="none"
        document.getElementById("prebattle").style.display=''  
    }

}

function settings(){
	if(window.zone=="campaign"){campaignUnload()}
	if (window.zone!="settings"){
		//clearScreen(document.getElementById("lobbyContainer"))
		document.getElementById("campaign").style.display="none"
		document.getElementById("settings").style.display=''
		document.getElementById("lobbyContainer").style.display="none"

		window.zone="settings"
		playSound('generalPurposeAutomatedSolution2196f3.wav',true)
		loading(true)
	}
}

function campaign(){
	if(window.zone=="campaign"){campaignUnload()}
	if (window.zone!="campaign"){
		//clearScreen(document.getElementById("lobbyContainer"))
		document.getElementById("settings").style.display="none"
		document.getElementById("campaign").style.display=''
		document.getElementById("lobbyContainer").style.display="none"
		
		window.zone="campaign"
		playSound('void.wav',true)
		loading(true)
	}
	campaignLoad()
}

	


