"use strict";


//funcion anonima
//es una funcion que no tiene nombre

var peli = function (nombre) {

    console.log("La pelicula tiene como nombre:", nombre);

    return "Este es el return de la funcion y tiene como nombre la pelicula: "+ nombre;

  }

console.log(peli("Residente"));


console.log("==============================================================================================");


function sumame(numero1,numero2,sumaYmuestra,sumaPorDos) {
    
    var sumar= numero1 + numero2;
      console.log("La suma es: ",sumar);
      sumaYmuestra(sumar);
      sumaPorDos(sumar);
      return "Este es el return de la funcion y la suma es: "+ sumar;
  }
  

console.log(
    sumame(4,4,function(num) {
        console.log("La muestra de la suma es: ",num);
     }, function (num) {
        console.log("La muestra de la suma por dos es: ", (num*2));
     })
);