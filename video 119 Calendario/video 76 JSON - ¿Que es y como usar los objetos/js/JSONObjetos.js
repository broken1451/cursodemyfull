"use strict";


//JSON - JS Object notation

var pelicula = { nombre:"batman",pais:"usa", ano:2015};

var peliculas = [{nombre:"robin",pais:"Londres", ano:2018},pelicula];

// console.log(pelicula);

// console.log(pelicula.nombre);
// console.log(pelicula.pais);
// console.log(pelicula.ano);

// pelicula.nombre ="Ralph Wifi";

// console.log(pelicula);
// console.log(peliculas);



var caja_peli = document.querySelector("#peli");
var index;
for (index in peliculas) {
   var p = document.createElement("p");
//  p.append(peliculas[index].nomb + " - " + peliculas[index].banda);
   p.append(peliculas[index].nombre + " - " + peliculas[index].pais + " - " + peliculas[index].ano);
   caja_peli.append(p);
}
