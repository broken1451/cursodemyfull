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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Hola mundo con typescript");
console.log("tsc -w *.ts");
/*
    camiseta.ts:29:7 - error TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.
    29 class Camiseta implements CamisetaBase{
     ~~~~~~~~
    camiseta.ts:104:10 - error TS2339: Property 'estampacion' does not exist on type 'Camiseta'.
    104 camiseta.estampacion();

*/
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
//Decorador / Clase (molde del objeto)
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
    Clases = __decorate([
        estampar("jdnhjkfndjkfndjkfndjkfnsdjkfndfjkdsnfsdjkfnsdjkf")
    ], Clases);
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
camiseta.estampacion();
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
