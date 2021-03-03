function autohostNetwork(msgSaid) {
	var cmdDict=autohostParse(msgSaid[1])
	console.log('CMD DICT!!!!!!!!!!!1')
	console.log(cmdDict)
	if (cmdDict['user'][0]==window.username|cmdDict['user'][0]=='all')
	{
	
		try{
			window.client.joinBattle(cmdDict['join'][0])
			preBattleListMap(cmdDict['available-maps'])
		}
		catch(err){   //already in the room
			console.log('not a inviting cmd!')
			
		}
		try{
			frdTeamUpdate(cmdDict['teams'])
		}
		catch(err)
		{
			console.log('the autohost does not contain a player response')
		}
		try{
			preBattleListMap(cmdDict['available-maps'])
		}
		catch(err)
		{
			console.log('the autohost does not contain a list map response')
		}
		
		try{
			if (cmdDict['loading'][0]=='false')
			{
				loading(false)
			}
			else{loading(true)}
		}
		catch(err)
		{
			console.log('the autohost does not contain a loading response')
		}
		
		try{
			window.btlToken=cmdDict['engineToken'][0]

		}
		catch(err)
		{
			console.log('the autohost does not contain a token response')
		}
		
		try{
			if (cmdDict['joinasSpec'][0]=='true')
			{
				usyncWriteScript()
			}
			
		}
		catch(err)
		{
			console.log('the autohost does not contain a rejoin response')
		}
	}
	
}

function autohostParse(msgReceived){
	msgArray=msgReceived.split("--")
	var dict = {};
	for (var i = 0; i < msgArray.length; i++) {
		dict[msgArray[i].split(" ")[0]]=msgArray[i].split(" ").slice(1,(msgArray[i].split(" ").length-1))
	}
	if (window.dbug)
	{console.log("autohost parsed response")
	console.log(dict)}
	return dict
}
