"use strict";




/* 
que nos diga si un numero es par o impar
1.ventana prompt
2. si no es valido q nos pida de nuevo el numero

*/

var numero = parseInt((prompt("Introduzca numero 1",0)));

while (isNaN(numero)) {
    numero = parseInt((prompt("Introduzca numero 1",0)));
}

if (numero % 2 == 0 ) {
    console.log("Es un numero par");
}else{
    console.log("Es un numero impar");
}
