$(document).ready(function () {
    console.log("Jquery Funcionando");


    //load solo nos permite hacer un metodo de peticion ajax GET y meter los datos dentro de un elemento
        // $("#caja").load("https://reqres.in");


    //GET y POST

    //GET


    $.get("https://reqres.in/api/users",{page:2},function (response) {

         response.data.map( (user,i) =>{
             let img = document.createElement("img");
             img.src= user.avatar;
             $("#caja").append("<p>" + i+ " " +user.first_name + " "+ user.last_name  + " " + "</p>");
             $("#imagenes").append(img);
        }); 


    /*     
    response.data.forEach((element,indice) => {
            $("#caja").append("<p>" +element.first_name + "</p>" )
    });
             
    */
        console.log(response);
        console.log(response.data);
    });



/*

     var usuarios= {name:"adrian",web:"Adrian.com"}
    
          var usuariosJSON = JSON.stringify(usuarios)
    
          console.log(usuariosJSON);
        
          $.post($(this).attr("action"), usuarios, function (response) {
   
          
          console.log(response);

*/



    
    
    $("#fomulario").submit(function (e) { 
        e.preventDefault();//capturar el evento para q no me redirija a otra ventana
            var usuarios= {

                name: $('input[name="nombre"]').val(),
                web: $('input[name="web"]').val(),
                pass: $('input[name="pass"]').val()
             };
             
             var usuariosJSON = JSON.stringify(usuarios)
             
             console.log(usuariosJSON);
             console.log(usuarios);

            /*
            
             $.post($(this).attr("action"), usuarios, function (response) {
                 
                 console.log(response);
                 
                }).done ( function () { 
                    
                    alert("usuario añadido");
                    $("#caja").append("<p>" +usuarios.name + "</p>");
                    $("#caja").append("<p>" +usuarios.web + "</p>");
            }); 

            */

            
            $.ajax({
                type:"post",
                //dataType:"datos q se va a recibir o enviar:'json,html,xml,etc'",
                //contentType: formato en que viajaran los datos:"application/json"
                //url:la url la cual hacemos la peticion ajax
                //data:parametros q se estara usando
                //timeout:2000 tiempo que se tarda en la peticion en realizarce    
                url:$(this).attr("action"),
                data:usuarios,
                beforeSend:function () {
                    console.log("Enviando usuario");
                },
                success: function (response) {
                    $("#caja").append("<p>" +usuarios.name + "</p>");
                    $("#caja").append("<p>" +usuarios.web + "</p>");
                    console.log(response);
                },
                error:function () {
                    console.log("Ha ocurrido un error");
                },
                timeout:1000
            });
            return false;
    }); 
});






