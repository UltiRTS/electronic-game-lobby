var messenger = require('messenger');
//window.minimapCache={}
var ipcclient = messenger.createSpeaker(3141);

function ipcCheck(){
	current_date = new Date()
	cmm = current_date.getMinutes()
	ipcclient.request('ident', cmm, function(data){
		if (String(data)=='identified|'+2*cmm){pushSmolNotif('Neural Net ',"Successfully connected to the neural network!")}
		else {notice(true,'Neural Network Missfiring','Challenging the NN with x=2x'+cmm+', but got answer x='+String(data)+'. Without a functioning neural network, the terminal might have impaired cognitive ability and would not be able to communicate with the central server for intl exchange! ')}
})
	
}

function ipcGetMap(mapInternalName){

	preBtlUpdateSelfStats(false)
	ipcclient.request('dMap', mapInternalName, function(data){
		if (String(data)=='retrieved|'+mapInternalName){
	//getMinimapfromMapName(map)
			window.minimapCache[mapInternalName]=getMinimapfromMapName(mapInternalName)
			storage.set('mapCache',window.minimapCache)
			if (mapInternalName==window.currentMap){
				preBtlUpdateSelfStats(true)
				preBtlMoreMapBlowUp()
				//console.log('ipc response'+String(data)+String(mapInternalName))
				loading(false)
				pushSmolNotif('Map ',"Successfully loaded new map!")
			}
		}
					
		else if (String(data).startsWith('error|'+mapInternalName)){
			pushSmolNotif('Map',"Failed to loaded new map!")
			loading(false)
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


	
	

	
	
	
	
	
	

