// strict
"use strict";;

// CONDICIONAL IF 

// si a es igual a b entonces has algo

/*



*/

// var edad1 = 10;
// var edad2 = 12;
/*//si pasa esto
if (edad1 > edad2) {
    //ejecuta esto
    console.log("Edad1 uno es mayor q edad2");
}else{
    console.log("edad2 es menor que edad 1");
}

*/

var edad= 12;
var nombre = "usuario";

/*

Operadores relacionales:

MAYOR: >
MENOR: <
MAYOR O IGUAL: >=
MENOR O IGUAL: <=
IGUAL: ==
DISTINTO/DIFERENTE: !=


*/


if (edad >=18) {
    //es mayor de edad
    console.log(nombre + " eres mayor de edad tienes:" + edad + " AÑOS");
}else{
    //es mnor de edad
    console.log(nombre + " eres MNOR de edad tienes:" + edad + " AÑOS"); 
}

console.log("===================================");

//if anidados

if (edad >=18) {
    //es mayor de edad
    console.log(nombre + " eres mayor de edad tienes:" + edad + " AÑOS");

    if (edad <=33) {
        console.log("eres milenial");
    }else{
        console.log("no eres milenial");
    }

}else{
    //es mnor de edad
    console.log(nombre + " eres MNOR de edad tienes:" + edad + " AÑOS"); 
}

console.log("===================================");

//else if

if (edad >=18) {
    //es mayor de edad
    console.log(nombre + " eres mayor de edad tienes:" + edad + " AÑOS");

    if (edad <=33) {
        console.log("eres milenial");
    }else if(edad >=70){
        console.log("eres de la tercera edad");
    }else{
        console.log("ya no eres milenial"); 
    }

}else{
    //es mnor de edad
    console.log(nombre + " eres MNOR de edad tienes:" + edad + " AÑOS"); 
}































































/*// alert("Hola mundo con JS");
// alert("Welcome to curso de JS");
// document.write("Hola mundo con JS");
// document.write("Welcome to curso de JS");
// console.log("Muestra esto en la consola");
// console.log(5+5);

 */

