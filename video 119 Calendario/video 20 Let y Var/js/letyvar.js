// strict
"use strict";;

//let y var

//pruebas con var 

var numero = 40; // var numero es igual a  40
console.log(numero);

if (true) {
    // var actua de forma global 
    var numero = 50; //var numero es igual a  50
    console.log(numero);
}

console.log(numero); //var numero es igual a  50


//pruebas con let 

var texto = "Adrian";

console.log(texto); //  valor  adrian 

if (true) {
    // let lo q hacer es actuar a niveles de bloque
    
    let texto = "Andres"; // valor andres
    console.log(texto);

}

console.log(texto); // valor  adrian 



























/*// alert("Hola mundo con JS");
// alert("Welcome to curso de JS");
// document.write("Hola mundo con JS");
// document.write("Welcome to curso de JS");
// console.log("Muestra esto en la consola");
// console.log(5+5);

 */

