"use strict";

//fetch(ajax) y peticiones a servicios / apis rest

var usuario = [];
var div_usu = document.querySelector("#usuarios");
var div_usu1 = document.querySelector("#usuario");
//https://reqres.in/api/users
//https://jsonplaceholder.typicode.com/users

/* fetch("https://reqres.in/api/users")
.then(data => data.json())//then promesas recoje los datos, y los convierte a json
.then(data => {           //recojes la data en la variable data
    usuario = data;
    console.log(usuario);
}); */


getUsuarios()
.then(data => data.json())//then promesas recoje los datos, y los convierte a json
.then(user => {           //recojes la data en la variable 
    //  usuario = user.data;
    //  console.log(usuario);
    //  listadoUsuarios(usuario);

    console.log(user.data);
    listadoUsuarios(user.data);
    //despues que cargues este

    return getUsuario();//carga este

}) 
//  getUsuario() // cargan los dos de una vez
.then(data => data.json())
.then(usu => {
     //janeth(usu.data)
     janeth(usu);
    
/*     console.log(usu);
    let nombre = document.createElement("h3");
    let avatar = document.createElement("img");
    nombre.innerHTML = usu.data.first_name + " " + usu.data.last_name;
    avatar.src = usu.data.avatar ;
    div_usu1.append(nombre);
    div_usu1.append(avatar);
    document.querySelector("#usuario .loading").style.display="none";  */
        
});





function getUsuarios() {
    return  fetch("https://reqres.in/api/users");
}




function getUsuario() {
    return fetch("https://reqres.in/api/users/2");
}



var hr = document.createElement("hr");
function listadoUsuarios(usuario) {
    usuario.map((user,i) => {
        let nombre = document.createElement("h3");
        nombre.innerHTML = i + " "+ user.id + " " + user.first_name + " " + user.last_name;
        div_usu.append(nombre);
        div_usu.append(hr);
        document.querySelector(".loading").style.display="none";
    });
}




var hr1 = document.createElement("hr");

function janeth(usu) {
    console.log(usu);
    let nombre = document.createElement("h3");
    let avatar = document.createElement("img");
    // nombre.innerHTML =  usu.first_name + " " + usu.last_name;
    nombre.innerHTML =  usu.data.first_name + " " + usu.data.last_name;
    avatar.src = usu.data.avatar ;
    div_usu1.append(nombre);
    div_usu1.append(avatar);
    document.querySelector("#usuario .loading").style.display="none";
    div_usu1.append(hr1);
}