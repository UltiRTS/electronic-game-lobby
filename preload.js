 const Store = require('electron-store');
 
 const storage=new Store();
 if (storage.has('userVolume')){
	 window.userVolume=storage.get('userVolume')}
	 else{
		 window.userVolume=50;
	 }
