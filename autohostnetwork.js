function autohostNetwork(msgSaid) {
	var cmdDict=autohostParse(msgSaid[1])
	
	if (cmdDict['user']==window.username)
	{
		if (window.dbug)
		{}
		else {
			window.nowinBattle=cmdDict['room'];
			lobbyFlush(cmdDict['room'], 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, document.getElementById("title"+cmdDict['room']).innerHTML, 0, 0);
			window.client.joinChanel(cmdDict['room']);
			window.isExited=false;
		}
	}
	
	
	
	
	
	
	
	return;
	
}

function autohostParse(msgReceived){
	msgArray=msgReceived.split("--")
	var dict = {};
	for (var i = 0; i < msgArray.length; i++) {
		dict[msgArray[i].split(" ")[0]]=msgArray[i].split(" ")[1]
	}
	return dict
}
