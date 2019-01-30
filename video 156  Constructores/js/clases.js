console.log("Hola mundo con typescript");
console.log("tsc -w *.ts");
// C:\xampp\htdocs\xampp\Curso udemy Mjs\video 149 Compilación  Transpilación automática\js
//Clase (molde del objeto)
var Clases = /** @class */ (function () {
    // Metodos (funciones o acciones del objeto)
    //constructor primer metodo q se ejecuta y se usa para dar valor inicial a los atributos o propiedades del objeto y el constructor no devuelve ningun dato
    function Clases(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
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
var camiseta = new Clases("rojo", "Manga corta", "cocodrilo", "xl", 45);
camiseta.setColor("Rojo");
//camiseta.getColor();
console.log(camiseta);
var pantalon = new Clases("Azul", "shrot", "nike", "xl", 15);
pantalon.setColor("Blue");
// pantalon.getColor();
console.log(pantalon);
