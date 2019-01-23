// strict
"use strict";;

// operadores logicos dentro del IF




/*

OPERADORES LOGICOS:

AND(Y): &&
OR(O): ||
NEGACION: !

*/

var year = 2018;

//negacion

if (year !=2016) {
    console.log("El año no es 2016 estamos en el año", year);
}

//AND

if (year >= 2000 && year <=2020)  {
    console.log("Estamos bn");
}else{
    console.log("Algo anda mal");
}

//OR
    //con parentesis damos prioridad a una opreacion 
if (year ==2008 || year == 2016 || (year >= 2018 && year <= 2028 ) ) {
    console.log("Estamos bn el año acaba en 8");
}else{
    console.log("algo esta pasando aca revisa el año no esta registrado");
}









































































/*// alert("Hola mundo con JS");
// alert("Welcome to curso de JS");
// document.write("Hola mundo con JS");
// document.write("Welcome to curso de JS");
// console.log("Muestra esto en la consola");
// console.log(5+5);

 */

