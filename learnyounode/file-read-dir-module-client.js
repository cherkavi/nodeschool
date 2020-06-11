var fs = require('./file-read-dir-module')

fs(process.argv[2], process.argv[3], (error, data)=>{
    for(let eachFile of data){
        console.log(eachFile)
    }
})
