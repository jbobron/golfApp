// [note] we import the http module, the request handler, and initialize file
var http = require("http");
var handler = require("./request-handler");


// Why do you think we have this here?
// HINT:It has to do with what's in .gitignore


var port = 8080;
var ip = "127.0.0.1";
// create our instance of the server
var server = http.createServer(handler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
// server listens on specified port/ip
server.listen(port, ip);
