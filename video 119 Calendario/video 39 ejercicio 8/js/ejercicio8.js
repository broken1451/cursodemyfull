"use strict";




/* 
calculadora q pida dos numeros por pantalla,si metemos uno mal que nos vuelva a pedir,
mostrar por consola y pagina las opraciones basicas  de las cifras introducidas

*/

var numero = parseInt((prompt("Introduzca numero  ",0)));
var numero1 = parseInt((prompt("Introduzca numero  ",0)));

while (numero1 < 0  || numero < 0 || isNaN(numero) || isNaN(numero1) ) {
 numero = parseInt((prompt("Introduzca numero de la tabla ",0)));
 numero1 = parseInt((prompt("Introduzca numero de la tabla ",0)));

}

//por pantalla
var resultado = "La suma es: " + (numero + numero1) + "<br> " +
                "La resta es: " + (numero - numero1) + "<br> "+
                "El producto es: " + (numero * numero1) + "<br> "+
                "La division es: " + (numero / numero1) + "<br> ";



//por consola

var resultado1 = "La suma es: " + (numero + numero1) + " \n" +
                "La resta es: " + (numero - numero1) + " \n"+
                "El producto es: " + (numero * numero1) + "\n "+
                "La division es: " + (numero / numero1) + "\n ";

console.log(resultado1);
alert(resultado1);
document.write(resultado);