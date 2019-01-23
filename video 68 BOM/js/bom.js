"use strict";

//BOM - brower object model




function getBOM() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);//ubicacion
    console.log(window.location.href);//ubicacion
  }

function redirect (url) {  
      window.location.href=url;
}


function abrirVentana(url) {
    window.open(url,"40","89");
  }

  getBOM();
  //redirect("https://www.google.com/");
  abrirVentana("https://www.google.com/");

