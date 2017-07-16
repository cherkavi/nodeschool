let http = require('http')
let filesystem = require('fs')

let portNumber = Number(process.argv[2])
let pathToFileForResponse = process.argv[3]

let server = http.createServer((request, response)=>{
    filesystem.createReadStream(pathToFileForResponse).pipe(response)
})
server.listen(portNumber)

