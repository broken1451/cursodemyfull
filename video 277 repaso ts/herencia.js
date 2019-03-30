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
// Modulos
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda de tecnologia ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var CargaInformatica = new Informatica('Super tienda');
//////////////////////////////////////////////////////////////////
// Decoradores
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            console.log('El valor de lanzar es: ' + lanzar);
        };
    };
}
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa = __decorate([
        arranque('Lanzamiento del curso de nodeJS y angular 2')
    ], Programa);
    return Programa;
}());
var programa = new Programa();
programa.lanzamiento();
//herencia
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.getTimeLine = function () {
        return this.timeLine;
    };
    EditorVideo.prototype.setTimeLine = function (timeLine) {
        this.timeLine = timeLine;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + ' - ' + this.getVersion() + ' - ' + this.getTimeLine();
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setVersion(4);
editor.setNombre('Hola mundo');
editor.setTimeLine(4000);
console.log('Los datos de la clase padre y la clase hija esta siendo heredados por la hija y estos son los datos: ');
console.log(editor.getAllData());
///////////////////////////////////////////////////////////////////////////////////
//Logica del formulario
var programas = [];
function guardar() {
    // var nombre = (<decimos a ts que tipo de elemento esta manejando>document.getElementById('nombre'));
    var nombre = document.getElementById('nombre').value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(40);
    programas.push(programa);
    var list = '';
    // for (let i = 0; i < programas.length; i++) {
    //     list  = list + '<li>' + programas[i].getNombre() + '</li>'
    // }
    // programas.forEach(elemento => {
    //     list  = list + '<li>' + elemento.getNombre() + '</li>'
    // });
    programas.map(function (elemento, i) {
        list = list + '<li>' + elemento.getNombre() + ' ' + elemento.getVersion() + '</li>';
    });
    var listado = document.getElementById('Listado');
    listado.innerHTML = list;
    document.getElementById('nombre').value = '';
    console.log('el valor de programa.setNombre(nombre); es: ', nombre);
}
