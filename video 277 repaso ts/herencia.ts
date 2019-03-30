// Modulos
module Tienda {
    export class Ropa {
        constructor(public titulo:string) {
            alert(titulo);
        }
    }

    export class Informatica {
        constructor(public titulo:string) {
            alert('Tienda de tecnologia '+titulo);
        }
    }

}

import Informatica = Tienda.Informatica;
let CargaInformatica = new Informatica('Super tienda');



//////////////////////////////////////////////////////////////////
// Decoradores
function arranque(lanzar:string) {
    return function(target: Function) {
        target.prototype.lanzamiento = function():void {
            console.log('El valor de lanzar es: '+ lanzar);
        }
    }
}


@arranque('Lanzamiento del curso de nodeJS y angular 2')
class Programa {
 
    public nombre:string;
    public version:number;

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getVersion(){
        return this.version;
    }

    setVersion(version:number){
        this.version = version;
    }

}
var programa = new Programa();
    programa.lanzamiento();




//herencia
class EditorVideo extends Programa {

    public timeLine:number;

    getTimeLine(){
        return this.timeLine;
    }

    setTimeLine(timeLine:number){
        this.timeLine = timeLine;
    }

    getAllData():string{
        return this.getNombre() + ' - ' + this.getVersion() + ' - ' + this.getTimeLine();
    }

}

var editor =  new EditorVideo();

editor.setVersion(4);
editor.setNombre('Hola mundo');
editor.setTimeLine(4000);
console.log('Los datos de la clase padre y la clase hija esta siendo heredados por la hija y estos son los datos: ');
console.log(editor.getAllData());
///////////////////////////////////////////////////////////////////////////////////


//Logica del formulario

var programas: Array<any> = [];

function guardar() {
    // var nombre = (<decimos a ts que tipo de elemento esta manejando>document.getElementById('nombre'));
    var nombre = (<HTMLInputElement>document.getElementById('nombre')).value.toString();
    
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

    programas.map((elemento,i)=>{
        list  = list + '<li>' + elemento.getNombre() + ' ' + elemento.getVersion() + '</li>'
    });


    var listado = <HTMLInputElement>document.getElementById('Listado');
    listado.innerHTML= list;


    (<HTMLInputElement>document.getElementById('nombre')).value= '';
    console.log('el valor de programa.setNombre(nombre); es: ', nombre);

}


