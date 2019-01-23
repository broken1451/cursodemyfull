
//parametros opcionales no es obligatoria pasarle un resultado, ya vienen por defecto un valor
function  calculadora (num1, num2, mostrar=false) { 

if (mostrar == false) {
    console.log("La suma es: " + (num1 + num2));
    console.log("La resta es: " + (num1 - num2));
    console.log("La multiplicacion es: " + (num1 * num2));
    console.log("La division es: " + (num1 / num2));
    console.log(mostrar);
    console.log("=====================================================================================");
}else{
    document.write("La suma es: " + (num1 + num2)+ "<br>");
    document.write("La resta es: " + (num1 - num2)+ "<br>");
    document.write("La multiplicacion es: " + (num1 * num2)+ "<br>");
    document.write("La division es: " + (num1 / num2)+ "<br>");
    document.write(mostrar + "<br>");
    document.write("=====================================================================================" + "<br>");
    //return "HOLA MUNDO";
}
}   


calculadora(2,4);
calculadora(4,3,true);
calculadora(5,8,true);