"use strict";


var peliculas = ["El rey leon","Titanic","Los simpsons","Resident evil"];


// var elemento = prompt("ingrese una pelicula");

/* while (elemento !== "acabar") {
    elemento = prompt("ingrese una pelicula");
    peliculas.push(elemento);
} */


/* var elemento = "";

do {
    elemento = prompt("ingrese una pelicula");
    peliculas.push(elemento);
    
} while (elemento !="acabar");

peliculas.pop();
 */


//eliminar un elemento en esoecifico

var indice = peliculas.indexOf("Los simpsons");

console.log(indice);

if (indice > -1) {
    peliculas.splice(indice,1);
}


var peliculasString = peliculas.join();
console.log(peliculasString);


console.log(peliculas);


























