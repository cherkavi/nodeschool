const fs = require('fs')

if(process.argv.length <= 2 ){
    console.error("file name should be specified")
    process.exit(1)
}

fs.createReadStream(process.argv[2]).pipe(process.stdout)
