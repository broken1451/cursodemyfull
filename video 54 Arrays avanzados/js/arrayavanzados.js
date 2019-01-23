"use strict";




var nombres=["fdsfa","fdsafghg","erwe4","rer","safds","fdsaff","fsfsd",true];

var lenguajes = new Array("PHP","JS","Python","Go","Polymer");

//longitud

console.log("La longitud del arreglo nombres es: " + nombres.length);
console.log("La longitud del arreglo lenguajes es: " +lenguajes.length);


//ejercicio
 var elemento = parseInt(prompt("ingrese pocicion del arreglo q desea:"));

while (  elemento >= nombres.length || isNaN(elemento) ) {
     
    if ( elemento >= nombres.length  || isNaN(elemento)) {
        alert("Elija un mumero menor  " + nombres.length + " solo debe ser numeros " );
        elemento = parseInt(prompt("ingrese pocicion del arreglo q desea:"));
    
    }
    
}

alert("Eligio la pocicion "+nombres[elemento]);
 


 document.write("<h1>Lenguajes de programacion del 2018 </h1>");

 document.write("<ul>");

 for (var i = 0; i < lenguajes.length; i++) {
    
    document.write("<li>" +lenguajes[i] + "</li>" );
     
 }

 document.write("</ul>");

 array.forEach(element => {
     
 });