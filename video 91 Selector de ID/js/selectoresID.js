    
$(document).ready(function () {  
    console.log("Jquery esta instalado y funcionando");

    //Selector de  ID
        //var rojo =  $("#rojo").css("clave","valor");
      var rojo =  $("#rojo").css("background","blue")
                            .css("color","white");


     var amarillo = $("#amarillo").css("background","yellow")
                                  .css("color","blue");      
                                  
            $("#verde").css("background","green")
                        .css("color","white");                                 
      console.log(rojo);
 });