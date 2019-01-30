console.log("Hola mundo con typescript");
console.log("tsc -w *.ts");
// C:\xampp\htdocs\xampp\Curso udemy Mjs\video 149 Compilación  Transpilación automática\js
//Clase (molde del objeto)
var Clases = /** @class */ (function () {
    function Clases() {
    }
    // Metodos (funciones o acciones del objeto)
    Clases.prototype.setColor = function (color) {
        //this.precio = precio;
        this.color = color;
    };
    Clases.prototype.getColor = function () {
        // return this.color + this.precio;
        return this.color;
    };
    return Clases;
}());
var camiseta = new Clases();
// camiseta.color = "Rojo";
// camiseta.marca = "Manga larga";
// camiseta.modelo= "xs";
// camiseta.precio = 45;
// camiseta.talla = "xl";
camiseta.setColor("Rojo");
//camiseta.getColor();
console.log(camiseta.getColor());
var pantalon = new Clases();
// pantalon.color = "blue";
// pantalon.marca = "quickSilver";
// pantalon.modelo= "xs";
// pantalon.precio = 20;
// pantalon.talla = "34";
pantalon.setColor("Blue");
// pantalon.getColor();
console.log(pantalon);
