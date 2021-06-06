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
	if(!window.audioCtx) {
		context = new AudioContext();
		window.audioCtx = context;
	} else context = window.audioCtx;

	var prefix = 'assets/';

	// only when looping then 
	// set `window.isPlaying` -> true
	if(loop) {
		// if is playing disconnect it
		if(window.isPlaying) {
			window.currentLooping.disconnect(context.destination);
		}

		window.isPlaying = true;

		var sourceIntro = context.createBufferSource();
		var sourceLoop = context.createBufferSource();

		window.currentLooping = sourceIntro;

		var bufferIntro = toArrayBuffer(fs.readFileSync(prefix + file));
		var bufferLoop = toArrayBuffer(fs.readFileSync(prefix + 'loop_' + file));

		function playLoop() {
			console.log("Playing loop");
			context.decodeAudioData(bufferLoop, buf => {
				sourceLoop.buffer = buf;
				sourceLoop.connect(context.destination);
				sourceLoop.loop = true;
				sourceLoop.start(0);
				window.currentLooping = sourceLoop;
			});
		}

		context.decodeAudioData(bufferIntro, buf => {
			sourceIntro.buffer = buf;
			sourceIntro.connect(context.destination);
			sourceIntro.start(0);
			sourceIntro.addEventListener('ended', () => playLoop());
		});

	} else {
		var source = context.createBufferSource();
		var buffer = toArrayBuffer(fs.readFileSync(prefix + file));
		context.decodeAudioData(buffer, buf => {
			source.buffer = buf;
			source.connect(context.destination);
			source.start(0);
		});
	}
}


playSound('title.wav',true)
