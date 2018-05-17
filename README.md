# nodejs
Node.js server side 
Web app→ real time data, social network→ fast and efficient 
function
#12 core modules
if there is a core module we don't need to add path in 
var fs = require('fs');
//for common practice it is easier to name the object the same name as the module
showing the demo of how to use the core module and function writeFileSync

node.js code will be on the server when the client requests for the database this file is responsible for looking at the request and send back the information
or some file
#creating a basic server
#13 send back file css html javascript
create a simple new html file


#15 connect
in the terminal in IntelliJ
npm install connect --> go on the internet and fine a package
in the directory, node_modules has created and connect file
<
#16 Express --> node.js web's framework
a lot of functionality that we can use, structures of project files, folders 
in IntelliJ under Node.js and NPM --> Node.js Express App
//give the project name, 
// select tempate enineer --> EJS
in bin folder and click www--> modules dependencies
--> create server, files, the core behind project
download additional modules
public that user can stores, images, javascripts, stylesheets
route brains for each pages
right click and run-->localhost:3000 --> Express text 
#17 stack track errors handlers
#18 .ejs = embedded javascript --> html+javascript
syntax variable name <%= title %> with equal sign using for variable in express
<% %> --> plain javascript no equal sign=
user-> reqiest = index.js ==> homepage --> index as view in index.ejs  passing additional variable 
title == express

#20
adding new folder "template" in view
about.ejs, header.ejs
and under the route add about.js --> adding link <a href="/">Home</a>
after adding more pages, about.ejs, about.js, header.js
we need to add in app.js
#var about = require('./routes/about');
#app.use('/about',about);
#21 Working with JSON data
create JSON file
add local variable in app.js
#app.locals.points = "8713"; //pretty global for your project to see in the entire program
and type <p><%= points %></p> in index.ejs
