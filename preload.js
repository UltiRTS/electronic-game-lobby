 const Store = require('electron-store');
 
 const storage=new Store();
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
