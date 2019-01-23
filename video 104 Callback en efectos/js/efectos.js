$(document).ready(function () {
    console.log("Jquery Funcionando");



    // $("#caja").hide();

    $("#mostrar").click(function () { 
        $(this).hide();
        $("#ocultar").show();
        // $("#caja").show("fast"); 
        // $("#caja").show("normal"); 
        // $("#caja").show("slow"); 
        // $("#caja").fadeIn("slow"); 
        // $("#caja").fadeTo("slow",1); 
           $("#caja").slideDown("slow",()=>{
            console.log("mostrado");

        });
    });

    $("#ocultar").click(function () { 
        $(this).hide();
        $("#mostrar").show();
        // $("#caja").hide("fast"); 
        // $("#caja").hide("normal"); 
        // $("#caja").hide("slow"); 
        // $("#caja").fadeOut("slow"); 
        // $("#caja").fadeTo("slow",0)
        $("#caja").slideUp("slow",()=>{
            console.log("ocultado");

        })


    });


    $("#todoenuno").click(function () { 
        // $("#caja").toggle("fast");
        // $("#caja").fadeToggle("fast");
           $("#caja").slideToggle("slow",()=>{
                console.log("Muestra y cerrado el cartel")
        });
     });
 

  
 $("#animame").click(function () { 
  
    $("#caja").animate({marginLeft:"500px",fontSize:"50px",height:"120px"},"slow")
              .animate({marginTop:"100px",borderRadius:"900px"},"slow")
              .animate({marginLeft:"0px",borderRadius:"0px"},"slow")
              .animate({marginTop:"10px",borderRadius:"0px"},"slow")
              .animate({marginLeft:"500px"},"slow")
              .animate({marginLeft:"0px"},"slow");
 });


});