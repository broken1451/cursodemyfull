// strict
"use strict";;

//switch

var edad = 10;
var imprime="";

switch (edad) {
    case 18:
        console.log("Eres mayor de edad");
        imprime="Eres mayor de edad";
    break;

    case 25:
        console.log("Eres adulto");
        imprime="Eres adulto";
    break;  
    
    case 30:
        console.log("Eres milenial");
        imprime="Eres milenial";
    break;  

    case 40:
        console.log("Crisis de los 40");
        imprime="Crisis de los 40";
    break; 

    case 55:
        console.log("Estas en camino a la tercera edad");
        imprime="Estas en camino a la tercera edad";
    break; 

    case 70:
        console.log("Eres de la tercera edad");
        imprime="Eres de la tercera edad";
    break;

    default:
        console.log("Edad neutra");
        imprime="Edad neutra";
    break;
}

console.log(imprime);







































































/*// alert("Hola mundo con JS");
// alert("Welcome to curso de JS");
// document.write("Hola mundo con JS");
// document.write("Welcome to curso de JS");
// console.log("Muestra esto en la consola");
// console.log(5+5);

 */

