var messenger = require('messenger');
//window.minimapCache={}
var ipcclient = messenger.createSpeaker(3141);


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
				notice(true,'Map Received ',mapInternalName)
			}
		}
					
		else if (String(data).startsWith('error|'+mapInternalName)){
			notice(true,'Map Error ',mapInternalName)
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


	
	

	
	
	
	
	
	

