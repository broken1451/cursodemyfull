"use strict";

//DOM - document objet model

//conseguir elementos con id en concreto

// var caja = document.getElementById("micaja");
  var caja = document.querySelector("#micaja");
  

caja.innerHTML ="Texto modificado desde Js"; //Capturar el texto desde JS
caja.style.background = "red";
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



//Coseguir elementos por su etiqueta 
    
    var todoslosdiv= document.getElementsByTagName("div");
    // todoslosdiv[2].style.background="red";

var texto = todoslosdiv[2]; //.textContent;obtener el texto
texto.innerHTML="Soy el div numero 2 modificado";
texto.style.background = "green";
texto.style.color = "red";

var valor;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

for ( valor in todoslosdiv) {
    // console.log(todoslosdiv[valor]);
    // console.log(todoslosdiv[valor].textContent);

    // if (todoslosdiv[valor].textContent.length >= 1) {

    
      if ( typeof todoslosdiv[valor].textContent == "string" ) {
        var parrafo = document.createElement("p");//crear un etiqueta p
        var texto1 = document.createTextNode(todoslosdiv[valor].textContent);//el valor que tenga cada uno de los div dentro del bucle
        parrafo.appendChild(texto1); //meter texto dentro de parrafo, append añade despues
        // seccion.prepend(parrafo);//prepend añade antes
        seccion.append(parrafo);
        seccion.append(hr);
      }
     
 
}




// console.log(todoslosdiv);
// console.log(texto);







//conseguir elementos pior su clase css

// console.log(caja);