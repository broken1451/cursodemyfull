console.log("Hola mundo con typescript");
console.log("tsc -w *.ts");
// C:\xampp\htdocs\xampp\Curso udemy Mjs\video 149 Compilación  Transpilación automática\js
// function getNumero(numero:tipo de dato=40):tipo de dato que devuelve la funcion {
//     return "El valor del numero es: "+numero;
// }
function getNumero(numero) {
    if (numero === void 0) { numero = 40; }
    return "El valor del numero es: " + numero;
}
console.log(getNumero());