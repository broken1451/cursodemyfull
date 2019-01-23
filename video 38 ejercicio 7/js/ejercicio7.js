"use strict";




/* 
tabla de multiplicar de un numero introducido por pantalla

*/

var numero = parseInt((prompt("Introduzca numero de la tabla ",1)));

console.log("Tabla del numero " + numero);

for (var i = 0; i <=10; i++) {
    console.log(i + " x " + numero + " = " + (i*numero));  
}


//todas las tablas de multiplicar //#endregion

for (var c  = 1; c < 15; c++) {
    console.log("Tabla del numero " + c);
    for (var i = 0; i <=10; i++) {
        console.log(i + " x " + c + " = " + (i*c));  
    }
    
    
}
