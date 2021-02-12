function autohostNetwork(msgSaid) {
	var cmdDict=autohostParse(msgSaid[1])
	
	if (cmdDict['user'][0]==window.username|cmdDict['user'][0]=='all')
	{
	if (cmdDict['action'][0]=='listMap'){
		window.client.joinBattle(cmdDict['room'][0])}
		console.log(cmdDict)
		if (cmdDict['action'][0]=='listMap'){
			preBattleListMap(cmdDict['available-maps'])
				} 
		if (cmdDict['action'][0]=='teamAssign'){
				frdTeamUpdate(cmdDict['player'])
				console.log('trying to update team!!!!!!!!!!!!!!!!'+cmdDict['player'])
				} 

		if (cmdDict['action'][0]=='aiAdd'){
				aiPut(cmdDict['room'][0],cmdDict['AI'])
				console.log('trying to update team!!!!!!!!!!!!!!!!'+cmdDict['player'])
			} 
		if (cmdDict['action'][0]=='aiKill'){
			frdAIKill(cmdDict['room'][0],cmdDict['AI'])
				console.log('trying to update team!!!!!!!!!!!!!!!!'+cmdDict['player'])
			} 
			
		}
	}
	


function autohostParse(msgReceived){
	msgArray=msgReceived.split("--")
	var dict = {};
	for (var i = 0; i < msgArray.length; i++) {
		dict[msgArray[i].split(" ")[0]]=msgArray[i].split(" ").slice(1)
	}
	if (window.dbug)
	{console.log("autohost parsed response")
	console.log(dict)}
	return dict
}
