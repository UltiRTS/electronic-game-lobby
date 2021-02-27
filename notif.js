//window.isFXPlaying=false
window.isFXPlaying=false

function playFX(file='slidingObject.wav',isNotif=false){
	//window.audiovolumeFade=0
	fOutDuration=5  //ms
	fInDuration=5 //ms
	fadeOutStart=5
	if (window.isFXPlaying){
		return
	}
	if (isNotif){
		console.log('FX playing!!')
		window.isFXPlaying=true
		window.FXTmpVolume=0
		window.FXTmpDmpVolume=1
		window.FXaudio = new Audio('assets/'+file);
		window.FXaudio.addEventListener("loadeddata", function() {
		window.FXaudio.volume=window.userNotifVolume/100
		window.FXaudio.play();
		setTimeout(_FXFadeOut,(window.FXaudio.duration*1000-fadeOutStart),fOutDuration,isNotif);   //call _FXFadeOut() at (window.FXaudio.duration-fOutDuration) ms and tell it how long the fade out should be
		_FXFadeIn(fInDuration,isNotif)
		})
	}
	else{
		console.log('FX playing!!')
		window.isFXPlaying=true
		window.FXTmpVolume=0
		window.FXTmpDmpVolume=1
		window.FXaudio = new Audio('assets/'+file);
		window.FXaudio.addEventListener("loadeddata", function() {
		window.FXaudio.volume=window.userFXVolume/100
		window.FXaudio.play();
		setTimeout(_FXFadeOut,(window.FXaudio.duration*1000-fadeOutStart),fOutDuration);   //call _FXFadeOut() at (window.FXaudio.duration-fOutDuration) ms and tell it how long the fade out should be
		_FXFadeIn(fInDuration)
		})
		}
}

function _FXFadeIn(fInDuration,isNotif=false){
	//fInDuration=500 //ms
	window.fadeInTimer=setInterval(__audioAmp, fInDuration/10,isNotif);
	
}

function __audioAmp(isNotif){
	window.FXTmpVolume+=0.1
	console.log('FX fading in')
	if(window.FXTmpVolume>=1){
		clearInterval(window.fadeInTimer);
		window.FXTmpVolume=0
		return
	}
	if(isNotif){window.FXaudio.volume=window.FXTmpVolume*window.userNotifVolume/100}
	else{
		window.FXaudio.volume=window.FXTmpVolume*window.userFXVolume/100}
}

function _FXFadeOut(fOutDuration,isNotif=false){
	
	window.fadeOutTimer=setInterval(__audioDmp, fOutDuration/10,isNotif);
	
}

function __audioDmp(isNotif){
	window.FXTmpDmpVolume-=0.1
	console.log('FX fading out')
	if(window.FXTmpDmpVolume<=0){
		clearInterval(window.fadeOutTimer);
		window.FXTmpDmpVolume=1
		window.isFXPlaying=false
		return
	}
	console.log('out '+window.FXTmpDmpVolume*window.userFXVolume/100)
	if(isNotif){window.FXaudio.volume=window.FXTmpDmpVolume*window.userNotifVolume/100}
	else{
		window.FXaudio.volume=window.FXTmpDmpVolume*window.userFXVolume/100}
}
