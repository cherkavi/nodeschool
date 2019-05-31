const http_module = require('http')

const server = http_module.createServer( (request, response) => {
	response.statusCode = 200
	date = new Date()
	response.write("... ")
	response.write("Hello world: "+date)
	response.end()
})

server.listen(3000, "127.0.0.1", () => {
	console.log("started...")
})