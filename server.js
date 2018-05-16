var http = require('http');

function onRequest(request,response){
  console.log("A user made a request" + request.url);
  response.writeHead(200, {"Context-type": "text/plain"});
  response.write("Here is some data");
  response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Server is now running....");
/*
Server is now running....
A user made a request/
A user made a request/favicon.ico
//when we put localhost:8888 --> show the content of " Here is some data"
*/
