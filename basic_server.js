var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    response.end('<h1>Welcome back, Chief\n</h1>');
});
//
server.listen(8080, '127.0.0.1');
console.log('Server runs in 127.0.0.1:8080');