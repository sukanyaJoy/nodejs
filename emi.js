var movies = require('./movies');
//objectFactory
var emiMovies = movies();
emiMovies.favMovie="The Notebook";
console.log("Emi's favorite movie is: " + emiMovies.favMovie);

/*10 sharing module
movies.favMovie = "The Notebook";
console.log("Emi's favorite movie is : "+ movies.favMovie);
*/
