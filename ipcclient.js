var messenger = require('messenger');
//window.minimapCache={}
var ipcclient = messenger.createSpeaker(3141);


  // use send instead of reply


function ipcGetMap(mapInternalName){
	//window.requestedminimapname=mapInternalName
	window.minimapCache=storage.get('mapCache')
	
	if (!storage.has('mapCache')){
		//console.log('storage init ran!!!!!!!1')
		storage.set('mapCache',{'1':'2'})
		window.minimapCache=storage.get('mapCache')
		
	}
	
	else{   //3 possibilities when it has a cache: 1, unable to get cache, this should cancel loading very fast since usync returns fast
		if (!window.minimapCache[mapInternalName]=='Retrieved'){	notice(true,'New Map ','A new map is being downloaded ')} 
		//else if (mapInternalName in window.minimapCache){	notice(true,'Map Change ','The Map Has Changed ');loading(false)} //2, cache hit, cancel loading right away, prepare for a game
		//else{notice(true,'Map Downloading ','A map is being downloaded to the cache');} 
		
	}
	
	
	ipcclient.request('dMap', mapInternalName, function(data){
		//window.minimapCache[window.requestedminimapname]=data
		window.minimapCache[mapInternalName]=data
		storage.set('mapCache',window.minimapCache)
		//console.log('data from ipc:'+ String(data))
		loading(false)
		if (String(data)=='Unable to locate map'){	notice(true,'Unable To Get Map ',data);}
		if (String(data)=='Usync Err'){	notice(true,'Unable To Get Mini Map ',data);}
		
		
	});
	
}

