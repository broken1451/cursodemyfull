"use strict";

//fetch(ajax) y peticiones a servicios / apis rest

var usuarios = [];
var usuario = [];
var div_usu = document.querySelector("#usuarios");
var div_usu1 = document.querySelector("#usuario");

//https://reqres.in/api/users
//https://jsonplaceholder.typicode.com/users

getUsuarios()
.then(data => data.json())//then promesas recoje los datos, y los convierte a json
.then(user => { //recojes la data en la variable 
     usuarios = user.data;
    // console.log(usuarios);
    listarUsuarios(usuarios); //primero ejecuta esta promesa 

        return getUsuario() //despues esta

        })
            .then(data => data.json())
            .then(jane => {
                 // usuario = jane.data
                 // console.log(usuario);
                    janeth(jane);
        });





function getUsuarios() {
  return fetch("https://reqres.in/api/users");  
}


function getUsuario() {
    return fetch("https://reqres.in/api/users/2");  
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