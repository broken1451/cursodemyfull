"use strict";

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");

// document.write("Su nombre es: "+ nombre + "<br>" + " y su apellido es: " + apellido);
// <h1> Su nombre es: ${interpolacion imprimir la variable} </h1> 

var plantilla = `
<h1> hola q tal esto es una plantilla </h1>
<h3> Su nombre es: ${nombre} </h3>
<h3> Y apellido es: ${apellido} </h3>

`;

document.write(plantilla);

// ``


