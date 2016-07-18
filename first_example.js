var http = require('http');

var goodNews = 7000;

var badNews = 7500;

function handleGoodNews(request, response) {
	response.end("You're a Javascript God!");

}

function handleBadNews(request, response) {
	response.end("You smell.");

}

var goodNewsServer = http.createServer(handleGoodNews);   //connecting to a server, to a port

var badNewsServer = http.createServer(handleBadNews);

goodNewsServer.listen(goodNews, function(){
	console.log("Server listening on: http://localhost:%s", goodNews);
});

badNewsServer.listen(badNews, function(){
	console.log("Server listening on: http://localhost:%s", badNews);
});