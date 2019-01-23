// strict
"use strict";

//Como parar un bucle - Break
//blucle es una estructura de control que se repite varias veces

var year =2018;

while (year !=1990) {
    //ejecuta esto
    console.log("Estamos en el año: ",year);
    if (year == 2000) {
        break;//salir del bucle y parar el ciclo 
    }
    year--;
}


var years =50;
do {
    console.log("Solo cuando sea mayor a 25");
    if (years == 30) {
        break;
    }
    years--;
} while (years >= 25);




























































/*// alert("Hola mundo con JS");
// alert("Welcome to curso de JS");
// document.write("Hola mundo con JS");
// document.write("Welcome to curso de JS");
// console.log("Muestra esto en la consola");
// console.log(5+5);

 */

