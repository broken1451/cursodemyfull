"use strict";




var nombres=["fdsfa","fdsafghg","erwe4","rer","safds","fdsaff","fsfsd",true];

var lenguajes = new Array("PHP","JS","Python","Go","Polymer");


document.write("<h1>Lenguajes de programacion del 2018 </h1>");

document.write("<ul>");


lenguajes.forEach((elemento,index,data) =>{
    console.log(data);
    document.write("<li>" + index + " - " +elemento + " - "+ data +"</li>" );

});

nombres.forEach((element,indice,arr) => {
    document.write("<li>" + element + " - " + indice + " - "+ arr +"</li>" );
    console.log(arr);
});

document.write("</ul>");









