window.isPlaying=false

// convert nodejs buffer to ArrayBuffer 
// then deliver ArrayBuffer to AudioContext().decodeAudioData(buffer, successHanlder, errhandler)
function toArrayBuffer(buf) {
	var ab = new ArrayBuffer(buf.length);
	var view = new Uint8Array(ab);
	for (var i = 0; i < buf.length; ++i) {
		view[i] = buf[i];
	}
	return ab;
}

// new one
function playSound(file, loop) {
	var context;
	var contextGainNode;
	fadeDuration=2
	if(!window.audioCtx) {
		context = new AudioContext();
		window.audioCtx = context;
		contextGainNode = context.createGain();
		window.contextGain = contextGainNode;
		// connect to context
		contextGainNode.connect(context.destination);
		actuallyPlay()
		
	} else {
		context = window.audioCtx;
		contextGainNode = window.contextGain;
		//window.contextGain.gain.linearRampToValueAtTime(0, context.currentTime+fadeDuration);
		var instaVolDuringFade=50
		window.ramp=setInterval(
			function(){
				if(instaVolDuringFade<=0){clearInterval(window.ramp);actuallyPlay()}
				else{instaVolDuringFade-=4;window.contextGain.gain.setValueAtTime((window.userVolume/100)*(instaVolDuringFade/50), context.currentTime)}
				
			},100)
		
	}
	function actuallyPlay(){
	//window.contextGain.gain.setValueAtTime(window.userVolume/100, window.audioCtx.currentTime);
		contextGainNode.gain.setValueAtTime(window.userVolume/100, window.audioCtx.currentTime);
		var prefix = 'assets/';
		try{loading(false)}
		catch{}
		// only when looping then 
		// set `window.isPlaying` -> true
		if(loop) {
			// if is playing disconnect it
			if(window.isPlaying) {
				window.audioIntro.disconnect(window.contextGain);
				window.audioDelay.disconnect(window.contextGain);
			}

			window.isPlaying = true;

			var sourceIntro = context.createBufferSource();
			var sourceLoop = context.createBufferSource();


			var bufferIntro = toArrayBuffer(fs.readFileSync(prefix + file));
			var bufferLoop = toArrayBuffer(fs.readFileSync(prefix + 'loop_' + file));


			context.decodeAudioData(bufferIntro, buf => {
				var duration = buf.duration;
				sourceIntro.buffer = buf;
				var gainIntro = context.createGain();

				sourceIntro.connect(gainIntro);
				// intro fade in
				gainIntro.connect(contextGainNode);
				// set to disconnect
				window.audioIntro = gainIntro;

				//gainIntro.gain.setValueAtTime(0, context.currentTime+10);
				
				
				
				var delayNode = context.createDelay(duration-0.03);
				//var delayNode = context.createDelay()
				delayNode.delayTime.value = duration-0.03;
				delayNode.connect(contextGainNode);

				context.decodeAudioData(bufferLoop, buf => {
					var gainLoop = context.createGain();
					sourceLoop.buffer = buf;
					sourceLoop.loop = true;

					// set loop fade in
					//gainLoop.gain.setValueAtTime(0, context.currentTime);
					//gainLoop.gain.linearRampToValueAtTime(1, context.currentTime + 1);

					sourceLoop.connect(gainLoop);
					gainLoop.connect(delayNode);
					window.audioDelay = delayNode;
					sourceLoop.start(0);sourceIntro.start(0);
					
				});
			});

		} else {
			var source = context.createBufferSource();
			var buffer = toArrayBuffer(fs.readFileSync(prefix + file));
			context.decodeAudioData(buffer, buf => {
				source.buffer = buf;
				source.connect(contextGainNode);
				//window.contextGain.gain.setValueAtTime(window.userVolume/100, window.audioCtx.currentTime);source.start(0);},fadeDuration*1000
				
			});
		}
	
	}
}


playSound('title.wav',true)
