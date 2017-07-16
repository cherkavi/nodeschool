var fs = require('fs')

function listOfFiles(pathToFolder, filterExtension, callbackFunction){
    fs.readdir(pathToFolder, (error, listOfFiles)=>{
        if(error){
            callbackFunction(error)
            return
        }
        let files = []
        for( let eachFileIndex in listOfFiles ){
            let fileName = listOfFiles[eachFileIndex].toString()
            let extension = fileName.substring(fileName.lastIndexOf("."))
            if(extension==("."+filterExtension)){
                files.push(fileName)
            }
        }
        callbackFunction(error,files)
    })
}

module.exports = listOfFiles