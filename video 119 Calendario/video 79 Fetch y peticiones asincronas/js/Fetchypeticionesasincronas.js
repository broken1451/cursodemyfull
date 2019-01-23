"use strict";

// fetch(ajax) y peticiones a servicios/ apis rest

var usuarios = [];
var div_usu = document.querySelector("#usuarios");

// https://reqres.in/api/users?page=1
// https://jsonplaceholder.typicode.com/users


fetch("https://reqres.in/api/users")
.then(data => data.json())//then promesas recoje los datos, y los convierte a json
.then(user => { //recojes la data en la variable data
            usuarios = user.data;
            console.log(usuarios);

            usuarios.map((user,i) =>{
                var nombre = document.createElement("h3");
                var img = document.createElement("img");
                nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
                img.src =  user.avatar ;
                div_usu.append(nombre);
                div_usu.append(img);
                document.querySelector(".loading").style.display="none";
            
            });
        });  

/*  
    .then(data => data.json())
    .then(data => {
        usuarios = data;
        console.log(usuarios);

    }); */

























