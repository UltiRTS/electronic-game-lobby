function autohostNetwork(msgSaid) {
	var cmdDict=autohostParse(msgSaid[1])
	//console.log('CMD DICT!!!!!!!!!!!1')
	//console.log(cmdDict)
	try{
		if ( cmdDict['user'][0]==window.username|cmdDict['user'][0]=='all')
		{
	
			try{
				window.client.joinBattle(cmdDict['join'][0])
				preBattleListMap(cmdDict['available-maps'])
				pushSmolNotif('Battle','You have been invited to a battle.')
			}
			catch(err){   //already in the room
				//console.log('not a inviting cmd!')
			
			}
			if(cmdDict['room']==window.nowinBattle)
			{
				
				try{
					cmdDict['available-maps'][0]=cmdDict['available-maps'][0].replace(/maps\//g, "")
					cmdDict['available-maps'][1]=cmdDict['available-maps'][1].replace(/maps\//g, "")
					cmdDict['available-maps'][2]=cmdDict['available-maps'][2].replace(/maps\//g, "")
					cmdDict['available-maps'][3]=cmdDict['available-maps'][3].replace(/maps\//g, "")
					cmdDict['available-maps'][4]=cmdDict['available-maps'][4].replace(/maps\//g, "")
					
					cmdDict['available-maps'][0]=cmdDict['available-maps'][0].replace(/.smf/g, "")
					cmdDict['available-maps'][1]=cmdDict['available-maps'][1].replace(/.smf/g, "")
					cmdDict['available-maps'][2]=cmdDict['available-maps'][2].replace(/.smf/g, "")
					cmdDict['available-maps'][3]=cmdDict['available-maps'][3].replace(/.smf/g, "")
					cmdDict['available-maps'][4]=cmdDict['available-maps'][4].replace(/.smf/g, "")
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
					//console.log('the autohost does not contain a loading response')
				}
				
				try{
					
					if (!cmdDict['spectator']=='' || !cmdDict['spectator']==' '){window.specppl=cmdDict['spectator']}
					
					
				}
				catch(err)
				{
					//console.log('the autohost does not contain a loading response')
				}
				
				
				try{
					window.teamLeaders=cmdDict['leader'][0]
					}
					
				catch(err)
				{
					//console.log('the autohost does not contain a leader response')
				}
				
				
				try{
					frdTeamUpdatefromAutohost(cmdDict['teams'])
				}
				catch(err)
				{
					//console.log(err)
				}
				try{
					Q=[]
					if (!cmdDict['ingameChat'][0]==''){
					Q[0]=cmdDict['ingameChat'][0]
					Q[1]=cmdDict['ingameChat'].slice(1).join(' ')
					Q[2]=cmdDict['room'][0]
					msgPut(Q)}}
				catch(err)
				{
					console.log('err')
				}
		
		
		
		
		
				try{
					window.btlToken=cmdDict['engineToken'][0]
		
				}
				catch(err)
				{
					//console.log('the autohost does not contain a token response')
				}
		
				try{
					if (cmdDict['joinasSpec'][0]=='true')
					{
						usyncWriteScript()
						lobbyFlush(window.nowinBattle, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, document.getElementById("title"+window.nowinBattle).innerHTML, 0, 0);
					}
			
					}
				catch(err)
				{
					//console.log('the autohost does not contain a rejoin response')
				}
			
				try{
					window.totalPpl=cmdDict['totalPpl'][0]
				}
				catch(err)
				{
					//console.log('the autohost does not contain a totalPpl response')
				}
				
				
				
				try{
					document.getElementById("hostSays").value=cmdDict['comment'].join(' ')
					
				}
				
				catch(err)
				{
					//console.log('the autohost does not contain a comment response')
				}
				
				
				
				
				try{
					window.nowHostingPlayer=cmdDict['hoster'][0]
					}
				catch(err)
				{
					//console.log('the autohost does not contain a hosting player response')
				}
				
			}
		}
		
	}
	catch(err){
		//console.log('does not contain room cmd!')
		
	}
}

function pollNetwork(msgSaid){
	var cmdDict=autohostParse(msgSaid[1])
	/*	msgSaid[0]=user;
	 msgSaid[1]=msg;    *
	 msgSaid[2]=channel;*/
	try{
		if (cmdDict['bid'][0]==window.nowinBattle)
		{
			try{
				window.polls[msgSaid[1]]['ppl']=window.polls[msgSaid[1]]['ppl']+msgSaid[0]+' '
				cmdSupporter=new Set(window.polls[msgSaid[1]]['ppl'].split(" ")).size
				preBtlPollUpdate(window.polls[msgSaid[1]]['id'],cmdSupporter/window.totalPpl)
			}
			catch(err)
			{
				
				if(msgSaid[0]!=window.nowHostingPlayer){
					window.polls[msgSaid[1]]={'id':Object.keys(window.polls).length+1,'ppl':msgSaid[0]+' '}
					preBtlPollPut(msgSaid[1],window.polls[msgSaid[1]]['id'],1/window.totalPpl)
					//console.log('putting new poll!')
				} //no need to put up a new vote when this msg is from the hosting player
				else{return}
			}
			
			
		
		}}
		catch(err)
		{
			//console.log('a initial hosting request no need to parse!')
			
		}
	
	
}

function autohostParse(msgReceived){
	msgArray=msgReceived.split("--")
	var dict = {};
	for (var i = 0; i < msgArray.length; i++) {
		dict[msgArray[i].split(" ")[0]]=msgArray[i].split(" ").slice(1,(msgArray[i].split(" ").length-1))
	}
	if (window.dbug)
	{
		//console.log("autohost parsed response")
	//console.log(dict)
		
	}
	return dict
}
