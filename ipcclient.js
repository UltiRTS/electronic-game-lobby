var messenger = require('messenger');
window.minimapCache={}
var ipcclient = messenger.createSpeaker(3141);


  // use send instead of reply


function ipcGetMap(mapInternalName){
	window.requestedminimapname=mapInternalName
	ipcclient.request('dMap', mapInternalName, function(data){
		
		window.minimapCache[window.requestedminimapname]=data
		storage.set('minimapCache', window.minimapCache)
		console.log('data from ipc:'+ String(data))
loading(false)
  });
	
}

