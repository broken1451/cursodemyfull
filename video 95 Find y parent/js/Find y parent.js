    
$(document).ready(function () {  
    console.log("Jquery esta instalado y funcionando");

       //Selector de  ID
      //  var rojo =  $("#rojo").css("clave","valor");
       var rojo =  $("#rojo").css("background","blue")
                             .css("color","white");


      var amarillo = $("#amarillo").css("background","yellow")
                                   .css("color","blue");      
                                  
             $("#verde").css("background","green")
                        .css("color","white");                                 
       console.log(rojo);




     //Selector de  clase

    
            var miCrebra = $(".cebra").css("padding","50px"); 
                            //console.log(mi_crebra[1]) saca el elemnto concreto
                           //console.log(mi_crebra.eq(1)) saca el elemto de un array pero conm las propiedades de jquey

        $(".sinborde").click(function () {
                // $(this).css("border","5px dashed black"); 
                $(this).addClass("cebra");
                console.log("click dado");
          });

        $(".hola").mouseover(function () {
            // $(this).css("border","5px dashed black"); 
            $(this).css("background","orange");
            console.log("click dado");
         });

        console.log(miCrebra.eq(0))
        




 

     //Selectores de etiquetas

         var parra = $("p").css("cursor","pointer");
         
         parra.click( function () { 
            
             var that = $(this);

            if(!that.hasClass('grande')){ //ver si el elemento tiene la clase hasClass
               
               that.addClass('grande');
            } else {
               that.removeClass('grande');
               
            }

            console.log(that);
            
         });




      //Selectores de atributos

         $('[title="google"]').css("background","orange")
         $('[title="facebook"]').css("background","red")
         $('[href="facebook"]').css("font-size","50px")


         
         //otros selectores

            //  $("p, a").addClass("margen-superior")

//var busque =  $("#caja").find(".resaltado");// para buscar en un arbol de html muy grando q no sabemos donde se encuentran las clases o elementos
            // $("#caja .resaltado");

   // var busque =  $("#caja").eq(0).parent().parent().parent().find("[href='facebook']");//saltar de una etiqueta a otra
   var busque =  $("#elemento2").parent().parent().find(".resaltado");
            console.log(busque);




 });




























      //    //ver si el elemento tiene la clase hasClass
      //    if ($(this).hasCLass('cebra')) {
      //       console.log("pase por este if");
      //       $(this).addCLass('grande');
      //  }