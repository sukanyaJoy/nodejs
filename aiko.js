var movies = require('./movies');
//objectFactory
var aikoMovies = movies();
aikoMovies.favMovie = "Good Will Hunting";
console.log("aiko's favorite movie is: " + aikoMovies.favMovie);

//console.log("Emi's favorite movie is : "+ movies.favMovie);
