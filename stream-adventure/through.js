let through = require('through2')

let write = function (buffer, encoding, next){
	this.push(buffer.toString().toUpperCase())
	next()
}
let end = function(done){
	done()
}

let stream = through(write, end)
process.stdin.pipe(stream).pipe(process.stdout)
