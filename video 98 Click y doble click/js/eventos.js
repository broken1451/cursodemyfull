    
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



 });




























      //    //ver si el elemento tiene la clase hasClass
      //    if ($(this).hasCLass('cebra')) {
      //       console.log("pase por este if");
      //       $(this).addCLass('grande');
      //  }