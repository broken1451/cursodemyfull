"use strict";

var numero = 14;
var texto = "Hola estoy en el curso de js de victor robles js";
var texto1 = "Hola mundo";

console.log(texto.indexOf("js"));
console.log(texto.lastIndexOf("js"));
console.log(texto.search("js"));


console.log(texto.match("js"));
console.log(texto.match(/js/g));

console.log(texto.substr(4,14));

console.log(texto.charAt(14));

console.log(texto.startsWith("Hola"));//buscar al inicio del string

console.log(texto.endsWith("js"));//buscar al inicio del string

console.log(texto.includes("victor"));



