var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola mundo con typescript");
console.log("tsc -w *.ts");
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
//Herencia
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Clases));
var camiseta = new Clases("rojo", "Manga corta", "cocodrilo", "xl", 45);
console.log(camiseta);
var sudadera = new Sudadera("fdf", "fsdf", "fsfsdfsd", "fdfdsfsdfsdfsd", 12);
sudadera.setColor("Gris plateado");
sudadera.setCapucha(false);
console.log(sudadera.getCapucha());
console.log(sudadera.getColor());
console.log(sudadera);
/* var camiseta = new Clases("rojo","Manga corta","cocodrilo","xl",45);

camiseta.setColor("Rojooooooooo");
  camiseta.getColor();
  console.log(camiseta.getColor());
console.log(camiseta);


var pantalon = new Clases("Azul","shrot","nike","xl",15);

pantalon.setColor("Blueeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    pantalon.getColor();
    console.log( pantalon.getColor());
console.log(pantalon); */
