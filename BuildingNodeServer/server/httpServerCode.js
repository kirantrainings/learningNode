var http = require('http');

var myServer = http.createServer(function (req, res) {
    console.log(req.url);
    console.log(req.connection.remoteAddress);
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('ok');
});


module.exports = myServer;
