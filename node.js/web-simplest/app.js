var http = require("http");
var message = 'Hello World';
var port = 8666;

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(message);
	response.end();
}).listen(8666);
