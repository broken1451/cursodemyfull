
"use strict";


//parametros rest y spread


//parametros rest

function listadoFrutas(fruta1,fruta2, ...todasFrutas) {  

    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log("Todas las frutas: ",todasFrutas);

}



listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

console.log("===========================================================================================");
//parametros spread

var frutas=["Naranja","Manzana"];
listadoFrutas(...frutas,"Sandia","Pera","Melon","Coco");










