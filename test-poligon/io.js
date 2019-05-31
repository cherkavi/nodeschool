if(process.argv.length<=2){
	process.stdout.write("file should by specified \n");
	return;
}
// name of file for reading
var filePath=process.argv[2];
var fileSystem = require('fs');
var buffer=null;
try{
	buffer=fileSystem.readFileSync(filePath);
}catch(ex){
	process.stdout.write("file doesn't exists: "+filePath+"\n");
	return;
}
var fileAsString=buffer.toString();
var arrayOfLines=fileAsString.split('\n');
process.stdout.write((arrayOfLines.length-1).toString());
