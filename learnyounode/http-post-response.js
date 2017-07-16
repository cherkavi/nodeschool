let http = require('http')
var map = require('through2-map')

let portNumber = Number(process.argv[2])

let server = http.createServer(function(request, response){
    let buffer = ""
    if(request.method=="POST"){
        request.on("data", data=>{
            buffer = buffer + data.toString().toUpperCase()
        })
        request.on("end", endSignal=>{
            response.end(buffer)
        })
        // var server = http.createServer(function (req, res) {
        //     if (req.method !== 'POST') {
        //         return res.end('send me a POST\n')
        //     }
        //
        //     req.pipe(map(function (chunk) {
        //         return chunk.toString().toUpperCase()
        //     })).pipe(res)
        // })
    }
})
server.listen(portNumber)

