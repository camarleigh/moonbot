//imports the http module
var http = require('http');

// what port is ngrok listening on
const PORT = 4390;

//handle the request and send a response
function moonbotRequest(request,response){
  response.end('Ngrok-king it! You are hitting this path:' + request.url);
}

//create the web server, use the moonbot request response each time.
var server = http.createServer(moonbotRequest);

//start the server, issue callback if successful
server.listen(PORT, function(){
  console.log("We hear you! Server listening on http://localhost: %s ", PORT);
});


