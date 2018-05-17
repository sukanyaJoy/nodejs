//server framework call connect
var connect = request('connect');
var http require('http');

var app = connect();

function profile(request, response){
  console.log('User Requested profile');
}  
function forum(request, response){
  console.log('User Requested forum');
}    

app.use('/profile',profile);
app.user('/forum',forum);


/*
//create middleware and stack it on top of each other
//this function and execute step by step
function doFirst(request, response, next){
  console.log("Bacon");
  next();
}
function doFirst(request, response, next){
  console.log("Tuna");
  next();
}
//object app will call the function use that pass argument to the fuction
app.use(doFirst);
app.use(doSecond);
*/

http.createServer(app).listen(8888);
consol.log("Server is runnuubg....);
