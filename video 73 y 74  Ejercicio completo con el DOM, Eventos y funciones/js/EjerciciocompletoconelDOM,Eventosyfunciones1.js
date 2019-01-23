"use strict";

window.addEventListener("load",function () { 


var formulario = document.getElementById("formulario1");
var caja2 = document.querySelector(".borde");
caja2.style.display="none";

formulario.addEventListener("submit",function () {


    console.log("esta mandando el submit con formulario", formulario);

    var nombre= document.getElementById("nombre").value;
    var apellido= document.getElementById("apellido").value;
    var edad= document.getElementById("edad").value;

    if (nombre ==null || nombre ==" "  || !isNaN(nombre)) {
        alert("nombre no es valido");
        return false;
    }

    if (apellido ==null || apellido ==" "  || !isNaN(apellido)) {
        alert("apellido no es valido");
        return false;
    }

   
    if (edad ==null || edad ==" " || edad<=0 || isNaN(edad) ) {
        alert("edad no es valido");
        return false;
    }
   

    caja2.style.display="inline-block";

    var p_n = document.getElementById("p_n");
    var p_a = document.getElementById("p_a");
    var p_e = document.getElementById("p_e");

        p_n.textContent=nombre;
        p_a.textContent=apellido;
        p_e.textContent=edad; 


    /* var datos_usu=[nombre,apellido,edad];

    var indice;
    for ( indice in datos_usu) {
        console.log(datos_usu[indice]);
        var parrafo = document.createElement("p");
        parrafo.append(datos_usu[indice]);
        caja2.append(parrafo);   
    }
 */



  });









 });

