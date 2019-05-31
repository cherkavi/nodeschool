if(process.argv.length<=2){
  process.stdout.write("file should be specified \n");
  return;
}
// check arguments
pathToFile=process.argv[2];
// read file as string
var fileSystem=require('fs');
fileSystem.readFile(pathToFile,
                    function(err, fileData){
  // calculate number of lines
  var linesCount=fileData.toString().split('\n').length;
  // output them
  console.log((linesCount-1).toString());
  }
                    );
