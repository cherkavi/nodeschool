var fs = require('fs')

if(process.argv.length<=2){
    console.log("need to specify path to file")
    process.exit(1)
}


pathToFolder = process.argv[2]

let listOfFiles = fs.readdir(pathToFolder, (error, listOfFiles)=>{
    for( let eachFileIndex in listOfFiles ){
        let fileName = listOfFiles[eachFileIndex].toString()
        let extension = fileName.substring(fileName.lastIndexOf("."))
        if(extension==".md"){
            console.log(fileName)
        }
    }
})

