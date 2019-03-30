var Coche = /** @class */ (function () {
    function Coche() {
    }
    // Metodos
    Coche.prototype.getColor = function () {
        return this.color; // retorna el color
    };
    Coche.prototype.setColor = function (color) {
        this.color = color; // asignamos un color
    };
    return Coche;
}());
// crear el objeto 
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor('rojo mmgvo');
coche2.setColor('verde mmgvo');
coche3.setColor('azul mmgvo');
console.log('El color del coche es: ' + coche.getColor());
console.log('El color del coche 2 es: ' + coche2.getColor());
console.log('El color del coche 3 es: ' + coche3.getColor());
