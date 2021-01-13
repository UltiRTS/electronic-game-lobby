 const { remote } = require('electron')
 var os = require('os');
 const exec = require('child_process').exec;
 fs = require('fs');
 window.isLinux = os.type()=='Linux';
 
 
 
 function	runCmd(command, callback){
	 exec(command, (error, stdout, stderr) => { 
		 callback(stdout); 
	 });
 };
 

function writeFile(path,content,callback){
	fs.writeFile(path, content, callback);
	
	
}

function writeScript(){
	hostPort=window.roomPort[window.nowinBattle]
	content="[GAME]\n{\nHostIP=23.83.237.166;\nHostPort="+hostPort+";\nSourcePort=0;\nIsHost=0;\nMyPlayerName="+window.username+";\n}\n"
	writeFile('engine/_script.txt',content,()=>{
		runCmd('./engine/spring _script.txt', (output) => {
			console.log(output);
			playSound('lobby_intro.wav',true)
			restoreWindow()
		});
		stopSound()
		minimizeWindow()
	})
	
	
	
	

	
	
}
 
 function restoreWindow() {
	 remote.getCurrentWindow().maximize();
 }
 
 function minimizeWindow() {
	 remote.getCurrentWindow().minimize();
 }
 
 
 
 
 
 
 
 
 /*
 
 function unitsync(){
	process.chdir("./engine")
	if (window.isLinux){
		libPath = './libunitsync.so';
	}
	else{
		libPath = './unitsync.dll';
	}
	const unitsyncinit = getNativeFunction(libPath, 'Init', 'int', ['int', 'int']);
	console.log("entering unitsync")
	console.log(unitsyncinit(0, 0));
	
	const unitsyncmapstat = getNativeFunction(libPath, 'GetMapCount', 'int', []);
	console.log("map stat")
	console.log(unitsyncmapstat());
	
	const unitsyncmapname = getNativeFunction(libPath, 'GetMapName', 'char', ['int']);
	console.log("map name")
	console.log(unitsyncmapname(199));	
	console.log(unitsyncmapname(196));	
	console.log(unitsyncmapname(203));	
	console.log("map name")
	console.log(unitsyncmapname(8));	
	
	process.chdir('../')
 }
*/
