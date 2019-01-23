"use strict";


var lenguajes = new Array("PHP","JS","Python","Go","Polymer");
var numeros = new Array(20,80,11,6,5,40,80,60,100);

var busque = lenguajes.find(function (lenguaje) {  
    return lenguaje =="JS";
});


var busque1 = lenguajes.find(lenguaje => {  
return lenguaje =="JS";
});


var busque2 = lenguajes.find(lenguaje => lenguaje =="Go");

var busque3 = lenguajes.findIndex(lenguaje => lenguaje =="Go");


/////////////////////////////////////////////////////////////////////////////////////////////

var busquenumero = numeros.some(function (numero) {  
    return numero > 80 ;
});


var busquenumero1 = numeros.some(numero => {  
    return numero == 11;
    });
    
    
var busquenumero2 = numeros.some(numero => numero >=200);
    



console.log(busque);
console.log(busque1);
console.log(busque2);
console.log(busque3);

console.log("=====================================================================");
console.log(busquenumero);
console.log(busquenumero1);
console.log(busquenumero2);