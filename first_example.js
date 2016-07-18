var http = require('http');

var PORT = 7000;

function handleRequest(request, response) {
	response.end('It Works!! Path Hit: ' + request.url);

}

var server = http.createServer(handleRequest);   //connecting to a server, to a port

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});