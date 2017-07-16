let http = require('http')
let url = require('url')

let portNumber = Number(process.argv[2])

let server = http.createServer(function(request, response){
    if(request.method=="GET"){
        let requestUrl = url.parse(request.url, true)
        let data = {}
        response.writeHead(200, { 'Content-Type': 'application/json' })
        if(requestUrl.pathname == "/api/parsetime"){
            let requestDate = new Date(Date.parse(requestUrl.query.iso))
            data.hour = requestDate.getHours()
            data.minute = requestDate.getMinutes()
            data.second = requestDate.getSeconds()
        }
        if(requestUrl.pathname == "/api/unixtime"){
            let requestDate = new Date(Date.parse(requestUrl.query.iso))
            data.unixtime = requestDate.getTime()
        }
        response.end(JSON.stringify(data))
    }else{
        response.end()
    }
})
server.listen(portNumber)

