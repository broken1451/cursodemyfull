"use strict";

var numero = 14;
var texto = "Hola estoy en el curso de js de victor robles";
var texto1 = "Hola mundo";
var texto2 = ["hola","mundo","hola","mundo"];

//transformacion de texto
console.log(numero);
console.log(numero.toString());
console.log( typeof numero);



console.log(texto.toLocaleLowerCase());
console.log(texto.toLocaleUpperCase());


//calcular la longitud de un texto
console.log("el texto numero 1 tiene " + texto.length + " caracteres");

console.log("el texto numero 2 tiene " + texto1.length + " caracteres");

console.log(texto2);
console.log(typeof texto2);
console.log("El arreglo tiene " + texto2.length + " pocisiones");


//concatenar - unir texto 

console.log(texto + " " + texto1);
console.log(texto.concat( " " +texto1));








