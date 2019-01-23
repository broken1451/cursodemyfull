"use strict";

//local storage

//comprobar si tenemos  disponible local storage
if (typeof(Storage) !="undefined") {
    console.log("LocalStorage Disponible");
}else{
    console.log("LocalStorage no esta  Disponible");
}


//Guardar un dato en local storage
    //localStorage.setItem(key,valor)

var local = localStorage.setItem("titulo","Curso de js");


//recuperar elemento 
document.querySelector("#Local").innerHTML = localStorage.getItem("titulo");
console.log(localStorage.getItem("titulo"));


//guardar objetos
var usuarios = {nombre:"adrian",email:"test@gmail.com",web:"www.google.com"};
var usuariosJson = JSON.stringify(usuarios);//combertir a objeto json

localStorage.setItem("usuario",usuariosJson);


//recuperar objeto
var objetoOriginal = JSON.parse(localStorage.getItem("usuario"));//convertir en un objeto
document.querySelector("#local1").append(" "+objetoOriginal.web + " " + objetoOriginal.email);
console.log(objetoOriginal);


//eliminar local storage
localStorage.removeItem("usuario");//eliminar un registro
localStorage.clear();//elimina todo los registros





























