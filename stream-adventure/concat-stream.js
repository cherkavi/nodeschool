var concat = require('concat-stream');
var http = require('http');

var concatStream = function(body, res){
    return concat(function (body) {
        var obj = JSON.parse(body);
        res.end(Object.keys(obj).join('\n'));
    })
}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        console.log("post request is coming");
        req.pipe( concatStream(body, res)  );
    }
    else res.end();
});
server.listen(5000);
