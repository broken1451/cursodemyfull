"use strict";

/*

Hacer un programa que haga las siguientes cosas:

1) Pida 6 numero por pantalla  y los meta en un array
2) Mostrar eñ array entero(todos sus elementos) en el cuerpo de la pagina y en la consola
3) Ordenarlos y mostrarlo
4) Invertir su orden y mostrarlo
5) Mostrar cuantos elementos tiene el array
6) Busqueda de un valor introducido por el usuario,que nos diga si lo encuentra  y su indice (Se valorara el uso de funciones) 

*/

//1) Pida 6 numero por pantalla  y los meta en un array

        var array= [];

        // var elemento = parseInt(prompt("ingrese 6 numero"));

        // var elemento = elemento = parseInt(prompt("ingrese 6 numero"));

        /* do {
            elemento = parseInt(prompt("ingrese 6 numero"));
            array.push(elemento);
  
    
        } while (  elemento  != 7  );

          array.pop(); */


    for (var i = 0; i <6; i++) {
        
        array[i] =parseInt(prompt("ingrese un numero"));
        array.push[i];
    }
    

// 2) Mostrar eñ array entero(todos sus elementos) en el cuerpo de la pagina y en la consola

document.write("<h1> Contenido del array </h1>");

/* array.forEach((elemento,index,data) =>{
    // console.log(elemento);
    document.write(" <center>" + index + " - " +elemento +"</center>" );

}); */
muestraArray(array);
console.log(array);


// 3) Ordenarlos y mostrarlo

function muestraArray (elementos ) { 
    elementos.forEach((elemento,index,data) =>{
        console.log(elemento);
        document.write(" <center>" + index + " - " +elemento + "</center>" );
    
    });

 }


//  muestraArray(array);

var ordena = array.sort(function (a,b) { return a-b });
console.log(ordena);



//4) Invertir su orden y mostrarlo
 var reversa =  array.reverse();
 console.log(reversa);



 //5) Mostrar cuantos elementos tiene el array

 var contenidoArray = array.length;
 document.write("El arreglo tiene " + contenidoArray + " elementos")
 console.log(contenidoArray);


//6) Busqueda de un valor introducido por el usuario,que nos diga si lo encuentra  y su indice (Se valorara el uso de funciones) 

var busqueda = parseInt(prompt("busca un numero"));

 var pocicion = array.findIndex(arr => arr == busqueda);

 if ( pocicion && pocicion != -1 ) {
     document.write("El numero de la busqueda fue  " + pocicion );
     
 }else{
    document.write("El numero de la busqueda no fue  encontrado"  );
 }


 
