"use strict";

/*

Hacer un programa que haga las siguientes cosas:

1) Pida 6 numero por pantalla  y los meta en un array --

2) Mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola

3) Ordenarlos y mostrarlo

4) Invertir su orden y mostrarlo

5) Mostrar cuantos elementos tiene el array

6) Busqueda de un valor introducido por el usuario,que nos diga si lo encuentra  y su indice (Se valorara el uso de funciones) 

*/


//1) Pida 6 numero por pantalla  y los meta en un array

var numeros=[];


for (var i = 0; i <=5 ; i++) {
   
    numeros[i]=parseInt(prompt("Ingrese un numero"));
    numeros.push(numeros[i]);
    numeros.pop(numeros[i]);

 
}


// 2) Mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y en la consola

    //una manera es esta por pantalla
        /* document.write("<center> <h1> Arreglo mostrado en pantalla </h1></center> <br>");
        document.write("<center> <h3> <li>"+ numeros +"</li></h3></center> "); */
    
    //otra manera por pantalla es recorriendo el arreglo con un cliclo for,foreach o for in

            /* document.write("<center> <h1> Arreglo mostrado en pantalla </h1></center> <br>");
                numeros.forEach(function (elementos) { 
                document.write("<center> <h3> <li>"+ elementos +"</li></h3></center> ");
             }); */

             mostrarArray(numeros);

    //por consola
    console.log(numeros);


// 3) Ordenarlos y mostrarlo

    var oredenado = numeros.sort();
    /* document.write("<center> <h1> Arreglo oredenado mostrado en pantalla </h1></center> <br>");
    numeros.forEach(function (elementos) { 
        document.write("<center> <h3> <li>"+ elementos +"</li></h3></center> ");
     }); */

     mostrarArray(oredenado,"Ordenados");
        console.log(oredenado);


//  4) Invertir su orden y mostrarlo

    var alrreves = numeros.reverse();
    /* document.write("<center> <h1> Arreglo alrreves mostrado en pantalla </h1></center> <br>");
    numeros.forEach(function (elementos) { 
        document.write("<center> <h3> <li>"+ elementos +"</li></h3></center> ");
     }) */
     mostrarArray(alrreves,"Alrreves");
        console.log(alrreves);


//  5) Mostrar cuantos elementos tiene el array
     var lon= numeros.length;

        document.write("<center> <h1> Arreglo tiene de longitud en pantalla </h1></center> <br>"); 
        document.write("<center> <h3> "+ lon +"</h3></center> "); 
    
        console.log("Arreglo tiene de longitud en pantalla" ,lon);




 //6) Busqueda de un valor introducido por el usuario,que nos diga si lo encuentra  y su indice (Se valorara el uso de funciones)        

     var busca = parseInt(prompt("Introduca un numero a buscar en el arreglo"));

     var indicePocicion = numeros.findIndex(function (numero) { 
         return numero == busca;
      });

if (indicePocicion != -1) {
    document.write("<center> <h1> El indice de la pocicion es: </h1></center> <br>"); 
    document.write("<center> <h3> La pocicion del numero buscado es "+ indicePocicion +"</h3></center> ");
}else{
    document.write("<center> <h3> La pocicion del numero no fue encontrado </h3></center> ");
}
     



function mostrarArray (elemento, textoCustom="") {
    document.write("<h1><center> Contenido del array "+textoCustom +"</center> </h1>");
    document.write("<ul>");
    elemento.forEach(function (elemento) { 
        document.write("<center> <h3> <li>"+ elemento +"</li></h3></center>");
     });
    document.write("</ul>");
 }
