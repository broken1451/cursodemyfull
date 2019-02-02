console.log("Hola mundo con typescript");
console.log("tsc -w *.ts");

//interface
interface CamisetaBase{
	setColor(color);
	getColor();
}


/*
    camiseta.ts:29:7 - error TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.
    29 class Camiseta implements CamisetaBase{
     ~~~~~~~~
    camiseta.ts:104:10 - error TS2339: Property 'estampacion' does not exist on type 'Camiseta'.
    104 camiseta.estampacion();

*/


//Decorador
function estampar(logo:string) {
    return function (target:Function) {
       target.prototype.estampacion = function ():void {
           console.log("Camiseta estampada con el logo de: " + logo);
       } 
    }
}



//Decorador / Clase (molde del objeto)
@estampar("jdnhjkfndjkfndjkfndjkfnsdjkfndfjkdsnfsdjkfnsdjkf")
 class Clases implements CamisetaBase { 
    
    //Propiedades (caracteristicas del objeto)
        //public puedo acceder a los metodos y propiedades de cualquier lugar
        //protected puedo acceder a los metodos y propiedades desde la clase que lo define o desde cualquier otra clase q la herede
        //private puedo acceder a los metodos y propiedades desde la clase que se defina, dentro de la clase
        private color:string;
        public modelo:string;
        public marca:string;
        public talla:string;
        public precio:number;

    

    // Metodos (funciones o acciones del objeto)
        //constructor primer metodo q se ejecuta y se usa para dar valor inicial a los atributos o propiedades del objeto y el constructor no devuelve ningun dato
        constructor(color,modelo,marca,talla,precio){
            this.color = color;
            this.modelo = modelo;
            this.marca = marca;
            this.talla = talla;
            this.precio = precio;
        }

    public setColor(color){
        //this.precio = precio;
      this.color = color;
    }

    public getColor(){
        // return this.color + this.precio;
        return this.color;
    }

}


//Herencia

class Sudadera extends Clases  {

     public capucha:boolean;

 
    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }

}



var camiseta = new Clases("rojo","Manga corta","cocodrilo","xl",45);
camiseta.estampacion();
console.log(camiseta)



var sudadera = new Sudadera("fdf","fsdf","fsfsdfsd","fdfdsfsdfsdfsd",12);
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

























