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
