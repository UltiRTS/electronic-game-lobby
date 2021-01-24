function autohostNetwork(msgSaid) {
	var cmdDict=autohostParse(msgSaid[1])
	
	if (cmdDict['user'][0]==window.username|cmdDict['user'][0]=='all')
	{
		if (window.dbug)
		{}
		else {
			try {
				window.client.joinBattle(cmdDict['room'][0])
				} catch (error) {
				console.log('incomplete autohost response!')
				//console.error(error);
				}
				
				try {
					preBattleListMap(cmdDict['available-maps'])
				} catch (error) {
					console.log('incomplete autohost response!')
					//console.error(error);
				}
				
				try {
					frdTeamUpdate(cmdDict['player'])
					console.log('trying to update team!!!!!!!!!!!!!!!!'+cmdDict['player'])
				} catch (error) {
					
					console.log('incomplete autohost response!')
					//console.error(error);
				}
				
			
		}
	}
	
	
	
	
	
	
	
	return;
	
}

function autohostParse(msgReceived){
	msgArray=msgReceived.split("--")
	var dict = {};
	for (var i = 0; i < msgArray.length; i++) {
		dict[msgArray[i].split(" ")[0]]=msgArray[i].split(" ").slice(1)
	}
	console.log("autohost parsed response")
	console.log(dict)
	return dict
}
