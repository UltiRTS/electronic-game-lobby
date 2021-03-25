 const { remote } = require('electron')
 var os = require('os');
 const exec = require('child_process').exec;
 fs = require('fs');
 
 window.isLinux = os.type()=='Linux';
 
 
 
 function	runCmd(command, callback){
	 exec(command, (error, stdout, stderr) => { 
		 callback(stdout)
		 console.log(stdout); 
	 });
 };
 

function writeFile(path,content,callback){
	fs.writeFile(path, content, callback);
	
	
}

function usyncWriteScript(){
	hostPort=window.roomPort[window.nowinBattle]
	hostIP=window.roomIP[window.nowinBattle]
	content="[GAME]\n{\nHostIP="+hostIP+";\nHostPort="+hostPort+";\nSourcePort=0;\nIsHost=0;\nMyPlayerName="+window.username+";\nMyPasswd="+window.btlToken+";\n}\n"
	writeFile(process.env.WDIR+'/engine/_script.txt',content,()=>{
	if(window.isLinux){
		runCmd("\'"+process.env.WDIR+'/engine/spring\' \''+process.env.WDIR+'/engine/_script.txt\'', (output) => { 
			console.log(output);
			window.runningEngineCount-=1
			if(window.runningEngineCount==0){
			playSound('lobby_intro.wav',true)}
			restoreWindow()
			 
		});}
		else{
			console.log('start \"\" \"'+process.env.WDIR+'\\engine\\spring.exe\" \"'+process.env.WDIR+'\\engine\\_script.txt\"')
			runCmd('start \"\" \"'+process.env.WDIR+'\\engine\\spring.exe\" \"'+process.env.WDIR+'\\engine\\_script.txt\"', (output) => {
			console.log(output);
			window.runningEngineCount-=1
			if(window.runningEngineCount==0){
			playSound('lobby_intro.wav',true)}
			restoreWindow()
			 
		});}
		stopSound()
		minimizeWindow()
		 window.runningEngineCount+=1
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
