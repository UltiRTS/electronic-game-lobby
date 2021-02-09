window.dbug=false;
if (storage.has('userVolume')){
window.userVolume=storage.get('userVolume')}
else{
	window.userVolume=50;
}
function setVolume(vol){
	console.log("vol:"+vol)
	window.userVolume=vol
	window.audio.volume=vol/100
	document.getElementById("settingDigit").innerHTML=vol+"%"
}

function VolumeDone(){
	storage.set('userVolume', window.userVolume)
}
