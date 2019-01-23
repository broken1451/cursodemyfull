"use strict";

//funcion de flecha son solo para funciones anonimas



var peli =  (nombre) => {

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
    sumame(4,4,(num) =>{
        console.log("La muestra de la suma es: ",num);
     },  (num) => {
        console.log("La muestra de la suma por dos es: ", (num*2));
     })
);



