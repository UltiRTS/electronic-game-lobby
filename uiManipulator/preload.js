 const Store = require('electron-store');
 window.runningEngineCount=0
 window.networkBuffer=""
 window.minimapCache={}
 window.specppl=[]
 const storage=new Store();
 //const mapStorage=new Store();
 if (storage.has('userVolume')){
	 window.userVolume=storage.get('userVolume')}
	 else{
		 window.userVolume=50;
	 }

if (storage.has('userFXVolume')){
	window.userFXVolume=storage.get('userFXVolume')}
else{
	window.userFXVolume=16;
	}

if (storage.has('userNotifVolume')){
	window.userNotifVolume=storage.get('userNotifVolume')}
else{
	window.userNotifVolume=16;
	}

	if (!storage.has('mapCache')||storage.get('mapCache')==undefined){
		//console.log('storage init ran!!!!!!!1')
		storage.set('mapCache',{'1':'2'})
		
		
	}
	
	if (typeof(process.env.WDIR)=='undefined'){
		process.env.WDIR=storage.get('wDIR')
	}
	else{
		
		storage.set('wDIR',process.env.WDIR)
	}
window.minimapCache=storage.get('mapCache')
window.chatUpdate={}
