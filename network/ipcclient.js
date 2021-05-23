var messenger = require('messenger');
//window.minimapCache={}
var ipcclient = messenger.createSpeaker(3141);


  // use send instead of reply


function ipcGetMap(mapInternalName){
	//console.log('IPC CALLED ONCE!!!!!!!!!')
	//window.requestedminimapname=mapInternalName
	loading(true)
	console.log('initial dowloading map'+String(window.minimapCache[mapInternalName]))
	//window.minimapCache=storage.get('mapCache')
	preBtlUpdateSelfStats(false)
	console.log('initial dowloading map'+String(window.minimapCache[mapInternalName]))
	console.log('initial dowloading map stor'+String(storage.get('mapCache')[mapInternalName]))
	try{
		if (!window.minimapCache[mapInternalName].startsWith('retrieved') && !window.minimapCache[mapInternalName]=='beingRetrieved'){
			
			window.minimapCache[mapInternalName]='beingRetrieved'
			ipcclient.request('dMap', mapInternalName, function(data){
				
				if (String(data).startsWith('retrieved|'+mapInternalName)){
				
						window.minimapCache[mapInternalName]=data
						storage.set('mapCache',window.minimapCache)
					if (mapInternalName==window.currentMap){preBtlUpdateSelfStats(true)
					preBtlMoreMapBlowUp()
					//console.log('ipc response'+String(data)+String(mapInternalName))
					loading(false)
					notice(true,'New Map Loaded ',mapInternalName)}
				}
				
				else if (String(data).startsWith('error|'+mapInternalName)){
					notice(true,'Map Error ',mapInternalName)
					loading(false)
				}
				
		
			})
		}
	}
	catch (error){
		window.minimapCache[mapInternalName]='beingRetrieved'
		console.log('fallback downloading map '+String(error)+' fucking dict: '+String(window.minimapCache[mapInternalName]))

			ipcclient.request('dMap', mapInternalName, function(data){
				if (String(data).startsWith('retrieved|'+mapInternalName)){
					//window.minimapCache[window.requestedminimapname]=data
					window.minimapCache[mapInternalName]=data
					storage.set('mapCache',window.minimapCache)
					//console.log('data from ipc:'+ String(data))
					if (mapInternalName==window.currentMap){preBtlUpdateSelfStats(true)
					preBtlMoreMapBlowUp()
					//console.log('ipc response'+String(data)+String(mapInternalName))
					loading(false)
					notice(true,'New Map Loaded ',mapInternalName)}
					//console.log('fucker 3 canceling loading')
				}
				
				else if (String(data).startsWith('error|'+mapInternalName)){
					notice(true,'Map Error ',mapInternalName)
					loading(false)
				}
		
			})
		
		
	}
	console.log(window.minimapCache[mapInternalName])
	if (window.minimapCache[mapInternalName].startsWith('retrieved|'+mapInternalName)){
		console.log(window.minimapCache[mapInternalName])
		console.log(mapInternalName)
		preBtlUpdateSelfStats(true)
		loading(false)
		console.log('fucker 4 canceling loading')
	}
	
	
}
	
	
	
	
	
	

