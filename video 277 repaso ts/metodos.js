var Coche = /** @class */ (function () {
    function Coche() {
        this.velocidad = 0;
    }
    // Metodos
    Coche.prototype.getColor = function () {
        return this.color; // retorna el color
    };
    Coche.prototype.setColor = function (color) {
        this.color = color; // asignamos un color
    };
    Coche.prototype.acelerar = function () {
        this.velocidad = this.velocidad + 1;
        // this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        // this.velocidad = this.velocidad - 1;
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
// crear el objeto 
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor('rojo mmgvo');
//    coche2.setColor('verde mmgvo');
//    coche3.setColor('azul mmgvo');
//    console.log('El color del coche es: ' + coche.getColor());
//    console.log('El color del coche es: ' + coche2.getColor());
//    console.log('El color del coche es: ' + coche3.getColor());
// Metodos funcionando 
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log('La velocidad del coche es: ' + coche.getVelocidad());
console.log('El color del coche es: ' + coche.getColor());
coche.frenar();
console.log('La velocidad despues que coche frena es: ' + coche.getVelocidad());
