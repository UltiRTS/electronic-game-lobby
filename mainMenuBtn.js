function multiplayer()
{	if(window.zone!='lobby')
	{
	document.getElementById("lobbyContainer").style.visibility="visible"
	document.getElementById("settings").style.visibility="hidden"
	document.getElementById("Volpanel").style.visibility="hidden"
	document.getElementById("FIpanel").style.visibility="hidden"
	window.zone='lobby'
	playSound('lobby_intro.wav',true)
	loading(true)
	}
	
	if(document.getElementById("lobbyContent").style.visibility=="hidden" )
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
		document.getElementById("lobbyContainer").style.visibility="hidden"
		document.getElementById("settings").style.visibility="visible"
		document.getElementById("lobbyContent").style.visibility="hidden"
		document.getElementById("prebattle").style.visibility="hidden"
		window.zone="settings"
		playSound('generalPurposeAutomatedSolution2196f3.wav',true)
		loading(true)
	}
}
