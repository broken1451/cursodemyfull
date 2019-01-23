"use strict";

/*
Programa que pida dos numero y que nos diga cual es el mayor, el menor  y si son iguales
PLUS: si los numeros no son numeros o son menores o iguales a cero, nos los  vuelva a pedir 

*/


var numero1 = parseInt(prompt("ingrese numero 1"));

var numero2 = parseInt(prompt("ingrese numero 2"));


while (numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)) {

     numero1 = parseInt(prompt("ingrese numero 1"));
     
     numero2 = parseInt(prompt("ingrese numero 2"));
}




if (numero1 == numero2) {

    alert("los numero son iguales");

}else if (numero1 > numero2) {
    alert("El numero 1 es mayor q numero 2");
    alert("El numero mayor es: "+ numero1);
    alert("El numero menor es: "+ numero2);

}else if (numero2 > numero1) {
    alert("El numero 2 es mayor q numero 1");
    alert("El numero mayor es: "+ numero2);
    alert("El numero menor es: "+ numero1);

}else{
    alert("Ingrese numeros validos"); 
}



console.log(numero1, numero2);


