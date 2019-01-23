
"use strict";

//parametros opcionales no es obligatoria pasarle un resultado, ya vienen por defecto un valor


function porConsola (num1,num2) { 
    console.log("La suma es: " + (num1 + num2));
    console.log("La resta es: " + (num1 - num2));
    console.log("La multiplicacion es: " + (num1 * num2));
    console.log("La division es: " + (num1 / num2));
    console.log("=====================================================================================");


 }

function porPantalla (num1,num2) { 

    document.write("La suma es: " + (num1 + num2)+ "<br>");
    document.write("La resta es: " + (num1 - num2)+ "<br>");
    document.write("La multiplicacion es: " + (num1 * num2)+ "<br>");
    document.write("La division es: " + (num1 / num2)+ "<br>");
    document.write("=====================================================================================" + "<br>");
 }



function  calculadora (num1, num2, mostrar=false) { 

if (mostrar == false) {
    porConsola(4,5);
}else{
    porPantalla(8,6);
}
return "porPantalla";
}   


calculadora(2,4);
calculadora(4,3,true);
calculadora(5,8,true);
console.log(calculadora(10,6))