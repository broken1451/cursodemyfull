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
});