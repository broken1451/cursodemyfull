    
$(document).ready(function () {  
    console.log("Jquery esta instalado y funcionando");

   //mouseOver y mouseout

   var caja = $("#caja");

/*    caja.mouseover(function () { 
      // caja.css("background","red");
      $(this).css("background","red");
   });

   caja.mouseout(function () { 
      // caja.css("background","green");
      $(this).css("background","green");
   }); */





  //HOVER 
   function cambiaRojo () { 
      // caja.css("background","red");
      $(this).css("background","red");
   }

   function cambiaVerde () { 
      // caja.css("background","green");
      $(this).css("background","green");
   }

            // caja.hover(function () {
            //    $(this).css("background","red");
                  
            //    }, function () {
            //       $(this).css("background","green");
            //    }
            // );

      caja.hover(cambiaRojo,cambiaVerde)



   //Click y doble click

      caja.click(function () { 
         $(this).css("background","blue")
                .css("color","white");
         
      });

      caja.dblclick(function () { 
         $(this).css("background","pink")
                .css("color","red");
         
      });

   
   
    // Blur y Focus

      var nombre = $("#nombre");
      var datos = $("#datos");

      nombre.focus(function () { 
         $(this).css("border","4px solid green");
         
      });

      nombre.blur(function () { 
         $(this).css("border","1px solid #ccc");
         // $("#datos").css("display","block");
          $(this).val();//obtener el valor de un input
          datos.text($(this).val());//meter el valor q se obtiene del campo de texto en la propiedad gettext
          datos.text($(this).val()).show();
         // $("#datos").text(dato).show();

         // var datos = $(this).val();;//obtener el valor de un input
         // var datos1 = $("#datos").text(datos);
         // var todo= $("#datos").text(datos1);
         //    todo.show();
   
      });



      //Mousedown y mouseup

      datos.mousedown(function () { 
         $(this).css("border-color","gray");
      });

      datos.mouseup(function () { 
         $(this).css("border-color","black");
      });



     //mousemove - perseguir al raton  
      $(document).mousemove(function () { 
         // values: e.clientX, e.clientY, e.pageX, e.pageY
         //var sigueme = $("#sigueme");
         $("#sigueme").css("left",event.clientX)
                      .css("top",event.clientY)
         $("body").css("cursor","none");
         
         console.log("en X: "+event.clientX)
         console.log("en Y: "+event.clientY)
      });

 });




























      //    //ver si el elemento tiene la clase hasClass
      //    if ($(this).hasCLass('cebra')) {
      //       console.log("pase por este if");
      //       $(this).addCLass('grande');
      //  }