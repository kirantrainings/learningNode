//http
//fs
//streams
var http = require('http');
var port = 1339;

http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end("<h1>Hello Guys Welcome to Nodejs</h1>");

}).listen(port);

console.log('Our awesome web server running at http://localhost:' + port);
