
function  calculadora (num1, num2) { 


    console.log("La suma es: " + (num1 + num2));
    console.log("La resta es: " + (num1 - num2));
    console.log("La multiplicacion es: " + (num1 * num2));
    console.log("La division es: " + (num1 / num2));
    console.log("=====================================================================================");
    return "HOLA MUNDO";
}   

calculadora(2,50);
calculadora(3,5);
calculadora(8,45);
calculadora(6,5);
console.log(calculadora(2,2));

console.log("================================================================================= FOR");
 for (var i = 0; i <=5; i++) {
    console.log(i); 

    calculadora(i,8);
    if (i == 2) {
        break;
    }
    
 }   


 console.log("================================================================================= WHILE");
 var numero = 0;

 while (numero <=5) {
     
     console.log(numero);
     calculadora(numero,8);
     numero++;
         if (numero == 2) {
            break;
        }

 } 
 
 console.log("================================================================================= DO WHILE");


var numeros= 0;


 do {
    console.log(numeros);
    calculadora(numeros,8);
    numeros++;
            if (numeros == 4) {
               continue;
           }
 


 } while (numeros<=5);
 
 


