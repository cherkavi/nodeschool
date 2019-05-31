// check parameters
if(process.argv.length<4){
  console.log("need to specify path and extension of the file");
  return;
}

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

// read parameters
var fs=require('fs');
var path=require('path');

var pathToDir=process.argv[2];
var filteredExtension="."+process.argv[3];
if(!fs.existsSync(pathToDir)){
  console.log("folder doesn't exists");
  return;
}

fs.readdir(pathToDir, function(err, list){
  if(err!=null){
    console.log("can't read data from dir: "+err);
    return;
  }

  if(!pathToDir.endsWith('/')){
    pathToDir=pathToDir+'/';
  }

  for(var index=0;index<list.length;index++){
    var fileName=list[index];
    if(fileName==null || fileName.length==0){
        continue;
    }
    var absolutePath=pathToDir+fileName;
    if(fs.existsSync(absolutePath)){
      if(path.extname(fileName)!=filteredExtension){
        continue;
      }
      if(fs.lstatSync(absolutePath).isDirectory()){
        continue;
      }
      console.log(fileName);
    }
  }
})
