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
           $("#caja").slideDown("slow");
    });

    $("#ocultar").click(function () { 
        $(this).hide();
        $("#mostrar").show();
        // $("#caja").hide("fast"); 
        // $("#caja").hide("normal"); 
        // $("#caja").hide("slow"); 
        // $("#caja").fadeOut("slow"); 
        // $("#caja").fadeTo("slow",0)
        $("#caja").slideUp("slow")
    });


    $("#todoenuno").click(function () { 
        // $("#caja").toggle("fast");
        // $("#caja").fadeToggle("fast");
           $("#caja").slideToggle("slow");
     });
 

  



});