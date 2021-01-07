 const { getNativeFunction } = require('sbffi');
 var os = require('os');

 window.isLinux = os.type()=='Linux';
 
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
