function autohostNetwork(msgSaid) {
	var cmdDict=autohostParse(msgSaid[1])
	console.log('CMD DICT!!!!!!!!!!!1')
	console.log(cmdDict)
	if ( cmdDict['user'][0]==window.username|cmdDict['user'][0]=='all')
	{
	
		try{
			window.client.joinBattle(cmdDict['join'][0])
			preBattleListMap(cmdDict['available-maps'])
		}
		catch(err){   //already in the room
			console.log('not a inviting cmd!')
			
		}
		try{
			if(cmdDict['room']==window.nowinBattle){
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
			
				try{
					window.totalPpl=cmdDict['totalPpl'][0]
			
				
				}
				catch(err)
				{
					console.log('the autohost does not contain a totalPpl response')
				}
			}
		}
		catch(err){console.log('does not contain room cmd!')}
	}
	
}

function pollNetwork(msgSaid){
	var cmdDict=autohostParse(msgSaid[1])
	
		if (cmdDict['bid'][0]==window.nowinBattle)
		{
			try{
				window.polls[msgSaid[1]]['ppl']=window.polls[msgSaid[1]]['ppl']+msgSaid[0]+' '
				cmdSupporter=new Set(window.polls[msgSaid[1]]['ppl'].split(" ")).size
				preBtlPollUpdate(window.polls[msgSaid[1]]['id'],cmdSupporter/window.totalPpl)
			}
			catch(err)
			{
				console.log(err)
				window.polls[msgSaid[1]]={'id':Object.keys(window.polls).length+1,'ppl':msgSaid[0]+' '}
				preBtlPollPut(msgSaid[1],window.polls[msgSaid[1]]['id'],1/window.totalPpl)
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
