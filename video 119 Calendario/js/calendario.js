$(document).ready(function () {
    console.log("jquery funcionando");
    //mover elemento por la pagina
    $(".elemento").draggable();
   

    //Redimencionar
    $(".elemento").resizable();

    //seleccionar elementos y listar elementos
        //$(".lista").selectable();
        $(".lista").sortable({
            update: function (event,ui) {
                    console.log("Ha cambiado la lista");
                    console.log(event);
                    console.log(ui);
              }
        });


    //drop
    $("#elementoMovido").draggable();
    $("#area").droppable({
        drop:function () {  
            console.log("Has soltado dentro del area");
        }
    });


    //Efectos en la documentacion de jquery UI y jquery
        $("#mostrar").click(function () { 
         
            // $(".cajaefectos").toggle("fade");
            // $(".cajaefectos").effect("explode");
            // $(".cajaefectos").toggle("explode");
            // $(".cajaefectos").toggle("blind");
            // $(".cajaefectos").toggle("slide");
            // $(".cajaefectos").toggle("drop");
            // $(".cajaefectos").toggle("fold");
            // $(".cajaefectos").toggle("puff");
            // $(".cajaefectos").toggle("scale");
            // $(".cajaefectos").toggle("shake","slow");
            // $(".cajaefectos").toggle("shake",{height:200px,width:250px},5000);
            $(".cajaefectos").toggle("shake",2000);
        });


    //tooltips

        // $(document).tooltip();
           $("a").tooltip();


    //dialog

    $("#lanza").click(function () { 
        $("#dialogo").dialog(); 
    });


      //calendario o datapicker

      $("#calendario").datepicker();

      $("#resetea").click(function () { 
            $("#calendario").val(" ");
      }); 
});
