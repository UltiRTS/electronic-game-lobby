var messenger = require('messenger');
//window.minimapCache={}
var ipcclient = messenger.createSpeaker(3141);

function ipcCheck(){
	current_date = new Date()
	cmm = current_date.getMinutes()
	ipcclient.request('ident', cmm, function(data){
		if (String(data)=='identified|'+2*cmm){pushSmolNotif('Neural Net ',"Successfully connected to the neural network!")}
		else {notice(true,'Neural Network Misfiring','Challenging the NN with x=2 * '+cmm+', but got answer x='+String(data)+'; expecting answer '+2*cmm+'. Without a functioning neural network, the terminal might have impaired cognitive ability and would not be able to communicate with the block chain for intl exchange! ')}
})
	
}

function ipcGetMap(mapInternalName){

	
	ipcclient.request('dMap', mapInternalName, function(data){
		if (String(data)=='retrieved|'+mapInternalName){
	//getMinimapfromMapName(map)
			window.minimapCache[mapInternalName]=getMinimapfromMapName(mapInternalName)
			
			window.allMinimapCache=Object.assign({}, storage.get('mapCache'), window.minimapCache)
			storage.set('mapCache',window.allMinimapCache)



			if (mapInternalName==window.mapDic[window.nowinBattle]){
				preBtlUpdateSelfStats(true)
				preBtlMoreMapBlowUp()
				//console.log('ipc response'+String(data)+String(mapInternalName))
				
				pushSmolNotif('Map ',"Successfully loaded new map!")
			}
		}
			
		if (String(data)=='already|'+mapInternalName){
			//getMinimapfromMapName(map)
					//window.minimapCache[mapInternalName]=getMinimapfromMapName(mapInternalName)
					
					//window.allMinimapCache=Object.assign({}, storage.get('mapCache'), window.minimapCache)
					//storage.set('mapCache',window.allMinimapCache)
					if(!(mapInternalName in window.allMinimapCache)){
						window.minimapCache[mapInternalName]=getMinimapfromMapName(mapInternalName)
			
						window.allMinimapCache=Object.assign({}, storage.get('mapCache'), window.minimapCache)
						storage.set('mapCache',window.allMinimapCache)
						
					}
		
		
					if (mapInternalName==window.mapDic[window.nowinBattle]){
						preBtlUpdateSelfStats(true)
						preBtlMoreMapBlowUp()
						//console.log('ipc response'+String(data)+String(mapInternalName))
						
						pushSmolNotif('Map ',"Successfully loaded new map!")
					}
				}
		
		else if (String(data).startsWith('error|'+mapInternalName)){
			pushSmolNotif('Map',"Failed to loaded new map!")
			
				//window.minimapCache[mapInternalName]=data
				//storage.set('mapCache',window.minimapCache)
		}
	})
		
}

function ipcGetAllMap(){

	ipcclient.request('dAMap', mapInternalName, function(data){
		if (String(data).startsWith('retrievedAll|')){
	//getMinimapfromMapName(map)
			window.minimapCache[mapInternalName]=getMinimapfromMapName(mapInternalName)
			storage.set('mapCache',window.minimapCache)
			notice(true,'Map Downloaded ',mapInternalName)
		}
					
		else if (String(data).startsWith('error|'+mapInternalName)){
			notice(true,'Map Error ',mapInternalName)
			//loading(false)
				//window.minimapCache[mapInternalName]=data
				//storage.set('mapCache',window.minimapCache)
		}
		
	
	})
		
}


	
	

	
	
	
	
	
	

