const { remote } = require('electron')
const os = require('os');
const exec = require('child_process').exec;

//const libPath = path.join(process.env.WDIR, 'engine/libunitsync.so');


 window.isLinux = os.type()=='Linux';
 
 function getMinimapfromMapName(mapName){
	 

     //read image (note: use async in production)
     var _img = fs.readFileSync(process.env.WDIR+'/engine/maps/'+mapName+'.png').toString('base64');
     //example for .png
     
     return _img

}
 
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
 
function checkIsInDir(dirname, filename) {
	let flag = false;
	fs.readdirSync(dirname).forEach(file => {
		if(file == filename) flag=true;
	})
	return flag;
}
