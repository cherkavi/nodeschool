var fs = require('fs')

if(process.argv.length<=2){
    console.log("need to specify path to file")
    process.exit(1)
}


pathToFolder = process.argv[2]
if(!fs.existsSync(pathToFolder)){
    console.log("file %s does not exist", pathToFolder)
    process.exit(1);
}

let buffer = fs.readFileSync(pathToFolder)
let elements = buffer.toString().split("\n")
console.log(elements.length-1)