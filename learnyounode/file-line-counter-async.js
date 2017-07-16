var fs = require('fs')

if(process.argv.length<=2){
    console.log("need to specify path to file")
    process.exit(1)
}


pathToFolder = process.argv[2]
fs.readFile(pathToFolder, (error, data)=>{
    let elements = data.toString().split("\n")
    console.log(elements.length-1)
})
