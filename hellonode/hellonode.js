var http = require("http");

http.createServer(serverFunc).listen(8000);

function serverFunc(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!");
}

// Print URL for accessing server
console.log('Server running at http://port-8000.testing-ahobson891479.codeanyapp.com/')