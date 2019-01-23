"use strict";




/* 
Muestre todos los numero divisores de un numero que se introduzca en prompt

*/

var numero = parseInt((prompt("Introduzca numero 1")));


for (var i = 0; i < numero; i++) {
    
    if (numero%i == 0) {
        console.log("Dividor " + i);
    }
}





