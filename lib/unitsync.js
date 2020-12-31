 const { getNativeFunction } = require('sbffi');
 var os = require('os');
 
 if (os.type()!='Linux'){
	 window.isLinux=false
 }
 else{window.isLinux=true}
 
 if (window.isLinux){
	 libPath = './engine/libunitsync.so';
 }
 else{
	 libPath = './engine/unitsync.dll';
	 
}
const unitsyncinit = getNativeFunction(libPath, 'Init', 'uint32_t', ['uint32_t', 'uint32_t']);
 
console.log(unitsyncinit(0, 0));

const unitsyncwritabledir = getNativeFunction(libPath, 'GetWritableDataDirectory', 'char', []);

console.log(unitsyncwritabledir());


const unitsyncGetSpringVersion = getNativeFunction(libPath, 'GetSpringVersion', 'char', []);

console.log(unitsyncGetSpringVersion());


const unitsyncGetNextError = getNativeFunction(libPath, 'GetNextError', 'char', []);

console.log(unitsyncGetNextError());
console.log(unitsyncGetNextError());
console.log(unitsyncGetNextError());
console.log(unitsyncGetNextError());
console.log(unitsyncGetNextError());
console.log(unitsyncGetNextError());
console.log(unitsyncGetNextError());
console.log(unitsyncGetNextError());
console.log(unitsyncGetNextError());

//GetNextError
