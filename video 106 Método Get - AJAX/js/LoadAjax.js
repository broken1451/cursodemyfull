$(document).ready(function () {
    console.log("Jquery Funcionando");


    //load solo nos permite hacer un metodo de peticion ajax GET y meter los datos dentro de un elemento
        // $("#caja").load("https://reqres.in");


    //GET y POST

    //GET

    $.get("https://reqres.in/api/users",{page:2},function (response) {

         response.data.map( (user,i) =>{
             let img = document.createElement("img")
             img.src= user.avatar;
            $("#caja").append("<p>" + i+ " " +user.first_name + " "+ user.last_name  + " " + "</p>");
            $("#imagenes").append(img)
        }); 


    /*     
    response.data.forEach((element,indice) => {
            
            $("#caja").append("<p>" +element.first_name + "</p>" )
        });
             
    */
        console.log(response);
        console.log(response.data);
    });


});