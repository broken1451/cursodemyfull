var Coche = /** @class */ (function () {
    // Constructor
    function Coche(modelo) {
        // su principal funcion es inicializar variables y es el primer metodo de la clase que se ejecuta 
        if (modelo === void 0) { modelo = null; }
        this.color = 'WHITE';
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = 'Audi';
        }
        else {
            this.modelo = modelo;
        }
    }
    // Metodos
    Coche.prototype.getColor = function () {
        return this.color; // retorna el color
    };
    Coche.prototype.setColor = function (color) {
        this.color = color; // asignamos un color
    };
    Coche.prototype.getModelo = function () {
        return this.modelo; // retorna el modelo
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo; // asignamos un modelo
    };
    // protected solo se puede acceder  desde la clase q los define o cualquier clase que herede de esta
    /*
      protected setModelo(modelo:string){
             this.modelo= modelo; // asignamos un color
      }

    */
    // private son solo accesible desde la clase que los defina
    /*
       private setModelo(modelo:string){
           this.modelo= modelo; // asignamos un color
       }
      
      */
    Coche.prototype.acelerar = function () {
        this.velocidad = this.velocidad + 7;
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
var coche = new Coche('MERCEDEZ');
//    var coche2 = new Coche();
//    var coche3 = new Coche();
// coche.setColor('rojo mmgvo');
// coche2.setColor('verde mmgvo');
// coche3.setColor('azul mmgvo');
// console.log('El color del coche es: ' + coche.getColor());
// console.log('El color del coche es: ' + coche2.getColor());
// console.log('El color del coche es: ' + coche3.getColor());
// Metodos funcionando 
coche.acelerar();
coche.acelerar();
coche.acelerar();
//  coche.setModelo('hjh')
console.log('El color del coche es: ' + coche.getColor());
console.log('El modelo del coche es: ' + coche.getModelo());
console.log('La velocidad del coche es: ' + coche.getVelocidad());
coche.frenar();
console.log('La velocidad despues que coche frena es: ' + coche.getVelocidad());
