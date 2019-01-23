$(document).ready(function () {
    console.log("jquery funcionando");
    //mover elemento por la pagina
    $(".elemento").draggable();
   

    //Redimencionar
    $(".elemento").resizable();

    //seleccionar elementos
    $(".lista").selectable();
});