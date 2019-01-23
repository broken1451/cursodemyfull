"use strict";

var fomulario = document.querySelector("#formulario");


fomulario.addEventListener("submit",function () { 
    console.log("entro por aca");
    var peliculas = document.querySelector("#addpelicula").value;

  /*   if (peliculas ==="" || !isNaN(peliculas)) {
        alert("El campo no puede estar vacio ni puede ser numero");
        return false;
    }else{
        localStorage.setItem(peliculas,peliculas); 
    } */

    if (peliculas ===""){
        alert("El campo no puede estar vacio ni puede ser numero");
        return false;
    }else{
        localStorage.setItem(peliculas,peliculas); 
    }


 });

var ul = document.querySelector("#peli-list");

for (var i in localStorage ) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] ==="string") {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }

}



/////////////////////////////////////////////////////////////////////////////
var fomulario1 = document.querySelector("#formulario1");

fomulario1.addEventListener("submit",function () { 
    console.log("entro por aca");
    var peliculas = document.querySelector("#borrapelicula").value;

  /*   if (peliculas ==="" || !isNaN(peliculas)) {
        alert("El campo no puede estar vacio ni puede ser numero");
        return false;
    }else{
        localStorage.setItem(peliculas,peliculas); 
    } */

    if (peliculas ===""){
        alert("El campo no puede estar vacio ni puede ser numero");
        return false;
    }else{
        localStorage.removeItem(peliculas); 
    }


 });














/*  var ul = document.querySelector("#peli-list");
var index;
 for ( index in localStorage) {
    console.log(localStorage[index]);

    if (typeof localStorage[index]=="string") {
        var li = document.createElement("li");
        li.append(localStorage[index]);
        ul.append(li);
    }
 
 } */














