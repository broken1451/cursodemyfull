"use strict";

var texto ="Hola soy una variable global";
var numero = 14;

function holaMundo(texto) {

    var texto1="Variable local de la funcion";

    console.log(texto);
    console.log(typeof numero);
    console.log(numero);
    console.log(numero.toString());
    console.log(typeof numero.toString());
    console.log(texto1);

}


holaMundo(texto);
