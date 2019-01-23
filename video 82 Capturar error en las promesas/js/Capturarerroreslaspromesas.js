"use strict";

//fetch(ajax) y peticiones a servicios / apis rest

var usuarios = [];
var usuario = [];
var div_usu = document.querySelector("#usuarios");
var div_usu1 = document.querySelector("#usuario");
var div_profe = document.querySelector("#profe");
 
//https://reqres.in/api/users
//https://jsonplaceholder.typicode.com/users

getUsuarios()
.then(data => data.json())//then promesas recoje los datos, y los convierte a json
.then(user => { //recojes la data en la variable 
     usuarios = user.data;
    // console.log(usuarios);
    listarUsuarios(usuarios); //primero ejecuta esta promesa 

        // return getUsuario() //despues esta
        return getInfo()  
    })

    .then(data => {
        console.log(data);
        div_profe.textContent=data;
        
        return getUsuario()
    })
        .then(data => data.json())
        .then(jane => {
            // usuario = jane.data
            // console.log(usuario);
            janeth(jane);

              
    }).catch(error => { //capturar un error en la promesa
        console.log(error + " Esto es un error de la promesa,peticion ");
    });
            

function getUsuarios() {
  return fetch("https://reqres.in/api/users");  
}


function getUsuario() {
    return fetch("https://reqres.in/api/users/2");  
}



function getInfo() {
    
    var profesor = {nombre:"Adrian",ape:"Bravo",ci:20116823,city:"los teques"};

    // return new Promise ((si la promesa se ha resuelto => resolve ,si la promesa no se ha resuelto  => reject))
    return new Promise ((resolve,reject) =>{
        setTimeout(function () { 
            var profe = JSON.stringify(profesor);
            
            document.querySelector("#profe .loading").style.display="none";
           if (typeof profe != "string" || profe == " " ) {
               return reject("Error en la promesa");
           }else {
               return resolve(profe);  
           }

        },3000);

    // if (typeof profe != "string") return reject("Error en la promesa");
    //  return resolve(profe);


    })


}




function janeth(jane) {
    console.log(jane);
    let nombre = document.createElement("h3");
    let avatar = document.createElement("img");
    nombre.innerHTML = jane.data.first_name + " "+ jane.data.last_name;
    avatar.src= jane.data.avatar;
    div_usu1.append(nombre);
    div_usu1.append(avatar);

    // querySelector(".loading").style.display="none";
    document.querySelector("#usuario .loading").style.display="none";
}



function listarUsuarios(usuarios) {
    usuarios.map((user,i) => {
        
        let nombre = document.createElement("h3");
        nombre.innerHTML = i +  " " + user.first_name + " "+ user.last_name;
        div_usu.append(nombre);

        // querySelector(".loading").style.display="none";
        document.querySelector(".loading").style.display="none";
      
    });
}