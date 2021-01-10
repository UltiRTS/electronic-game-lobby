function autohostNetwork(msgSaid) {
	var cmdDict=autohostParse(msgSaid[1])
	
	if (cmdDict['user']==window.username)
	{
		if (window.dbug)
		{}
		else {

			
			window.client.joinBattle(cmdDict['room'])
			
			
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
