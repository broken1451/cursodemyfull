"use strict";

//DOM - document objet model

//conseguir elementos con id en concreto

// var caja = document.getElementById("micaja");
  var caja = document.querySelector("#micaja");
  

caja.innerHTML ="Texto modificado desde Js"; //Capturar el texto desde JS
// caja.style.background = "red";
caja.style.padding="20px";
caja.style.color="white";


function estilos (color,margen,letra) { 
    caja.style.background=color;
    caja.style.margin=margen;
    caja.style.color= letra;
    caja.class="Hola";
    caja.className="hola hola2";//añadir clases
 }



estilos("green","10px" ,"black");



console.log(caja);















