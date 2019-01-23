"use strict";

//Eventos  del raton 

var boton = document.getElementById("boton");


function cambiarColor(){ 
    
    console.log("me has dado click");
    var bg = boton.style.background;
    boton.style.padding="20px";
    boton.style.border="1px";
if (bg =="green") {
    boton.style.background="red";
}else{
    boton.style.background="green"; 
   
}

}


// boton.addEventListener("click",cambiarColor);
boton.addEventListener("click",function () { 
    cambiarColor();
 });


// Mouseover

boton.addEventListener("mouseover",function () {  
    boton.style.background="#ccc";
});

// Mouseout

boton.addEventListener("mouseout",function () {  
    boton.style.background="blue";
});


//focus
var input= document.querySelector("#texto");
input.addEventListener("focus",function () {  
    console.log("[focus] estas haciendo foco en el input");
});
  

//blur es cuando se sale del foco
input.addEventListener("blur",function () {  
    console.log("[blur] estas afuera foco en el input");
});


//keydown es cuadno escribes
input.addEventListener("keydown",function (event) {  
    console.log("[keydown] estas pulsando tecla", String.fromCharCode(event.keyCode));//capturar q tecla se esta presionando
});

//keypress cuando presionas una tecla

input.addEventListener("keypress",function (event) {  
    console.log("[keypress] estas pulsando tecla",String.fromCharCode(event.keyCode));//capturar q tecla se esta presionando
});


//keyup cuando levanto la tecla

input.addEventListener("keyup",function (event) {  
    console.log("[keyup] estas soltando la tecla",String.fromCharCode(event.keyCode));//capturar q tecla se esta presionando
});






