//
//in node.js when you share module the default behavior are also shared
require('./emi');
require('./aiko');

//modules using with the new export module
var movies = require('./movies');
movies.printAvatar();
console.log(movies.favMovie);

//modules--> working with movies.js
var movies = require('./movies'); //look in the same directory that we are at and look for after/
movies.avatar();


//prototype
funtion User(){
  this.name = "";
  this.life = 100;
  this.giveLife = functin giveLife(targetPlayer){
    targetPlayer.life += 1;
    console.log(this.name+ "gave 1 life to " + targetPlayer.name);
  }
}
var Emi = new User();
var Wendy = new User();

Emi.name = "Emi";
Wendy.name = "Wendy";

Emi.giveLife(Wendy);
console.log("Emi:" +Emi.life);
console.log("Wedndy:"+Wendy.life);
//you can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
  targetPlayer.lefe -= 3;
  console.log(this.name + "just uppercutted "+targetPlayer.name);
};
Wendy.uppercut(Emi);
console.log("Emi: "+Emi.life);
console.log("Wendy: "+Wendy.life);
//you can add properties to all objects
User.prototype.magic = 60;
console.log(Emi.magic);
console.log(Wendy.magic);

//////////////////////////////////////////////
var Emi = {
  printFirstName: funcion(){
    console.log("My name is Emi");
    console.log(this === Emi);
  }
};
Emi.printFirstName();

//The default calling context is global
function doSomethingWorthless(){
  console.log("\nI am worthless");
  console.log(this === global);
}
doSomethingWorthless();
/*run
My name is Emi
true

I am worthless
true
*/

console.log(19=='19'); //true --> comparing value
console.log(19==='19'); //false --> comparing data type
/*run
true
false
*/

//node--> everything is referrent, new object and set there properties
var Emi = {
  favFood: "bacon",
  favMovie: "Chappie"
};

var Person = Emi;
Person.favFood = "salad";
console.log(Emi.favFood);
/*run
salad
*/

function placeAnOrder(orderNumber){  
  console.log("Customer order:", orderNumber);
  cookAndDeliverFood(function(){
    console.log("Delivered food order:", orderNumber)
  })
}
//Simulate a 5 second operation
function cookAndDeliverFood(callback){
  setTimeout(callback,5000); //means 5 seconds, after 5 seconds call back
  //settimeout, schedule to callback
}
//Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
/* run
placeAnOrder1
placeAnOrder2
placeAnOrder3
Delivered food order:1
Delivered food order:2
Delivered food order:3
*/
