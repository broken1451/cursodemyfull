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
















