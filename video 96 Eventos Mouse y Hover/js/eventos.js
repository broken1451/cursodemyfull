    
$(document).ready(function () {  
    console.log("Jquery esta instalado y funcionando");

   //mouseOver y mouseout

   var caja = $("#caja");

   caja.mouseover(function () { 
      // caja.css("background","red");
      $(this).css("background","red");
   });

   caja.mouseout(function () { 
      // caja.css("background","green");
      $(this).css("background","green");
   });
 });




























      //    //ver si el elemento tiene la clase hasClass
      //    if ($(this).hasCLass('cebra')) {
      //       console.log("pase por este if");
      //       $(this).addCLass('grande');
      //  }