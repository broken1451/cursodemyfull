"use strict";


/* Utilizando un bucle, mostrar la suma y la media 
de los numeros introducidos hasta introducir un numero negativo y
 ahi mostrar el resultado */


var suma = 0;
var contador = 0;

do {
var numero = parseFloat(prompt("introduzca un numero hasta que metas un numero negativo"));

    if (isNaN(numero)) {
        numero=0;
    } else if (numero >= 0) {
        suma = suma + numero;
        // suma+=numero
        contador++;
    }
    console.log("la suma es: " + suma);
    console.log("la iteraccion numero es: " + contador);
    
} while (numero >= 0);

console.log("la suma de todos los numeros es: " + suma);
console.log("la iteraccion numero es: " + contador);
console.log("la la media de todos los numeros es: " + (suma/contador));


 




