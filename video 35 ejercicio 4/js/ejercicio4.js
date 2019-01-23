"use strict";


/*Mostrar todos los numeros impares que hay entre dos numero introducidos por el usuario*/


var numero1 = parseInt((prompt("Introduzca numero 1")));

var numero2 = parseInt((prompt("Introduzca numero 2")));


while (numero1 < numero2) {
    numero1++;

    if (numero1%2 !=0) {
        console.log("El numero 1 " + numero1 + " es impar");
    }

}
 



     
 




