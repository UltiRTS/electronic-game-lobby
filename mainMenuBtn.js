function multiplayer()
{
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

