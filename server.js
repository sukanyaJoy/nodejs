var http = require('http');
var fs = require('fs');

//build 404 response, what if they try to connect the file that can't connect,
function send404Response(response){
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("Error 404 : Page not found!");
  response.end();
  
}
//handle a user request
function onRequest(request, response){
  if(request.method == 'GET' && request.url =='/'){
    response.writeHead(200,{"Content-Type":"text/html"});
    //we don't know how big is the file so we send them as readable stream
    fs.createReadStream("./index.html").pip(response); //pip means to read it out, send it out to the response object
  }else{
    send404Response(response);
  }
 }//run localhost:8888/index.html
/*function onRequest(request,response){
  #12 simple server request and return text file
  console.log("A user made a request" + request.url);
  response.writeHead(200, {"Context-type": "text/plain"});
  response.write("Here is some data");
  response.end();
  
}*/
http.createServer(onRequest).listen(8888);
console.log("Server is now running....");
/*
Server is now running....
A user made a request/
A user made a request/favicon.ico
//when we put localhost:8888 --> show the content of " Here is some data"
*/
