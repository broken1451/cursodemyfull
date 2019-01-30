console.log("Hola mundo con typescript");
console.log("tsc -w *.ts");


// C:\xampp\htdocs\xampp\Curso udemy Mjs\video 149 Compilación  Transpilación automática\js


//Clase (molde del objeto)
class Clases {
    
    //Propiedades (caracteristicas del objeto)
        //public puedo acceder a los metodos y propiedades de cualquier lugar
        //protected puedo acceder a los metodos y propiedades desde la clase que lo define o desde cualquier otra clase q la herede
        //private puedo acceder a los metodos y propiedades desde la clase que se defina, dentro de la clase
        public color:string;
        public modelo:string;
        public marca:string;
        public talla:string;
        public precio:number;

    

    // Metodos (funciones o acciones del objeto)

    public setColor(color){
        //this.precio = precio;
      this.color = color;
    }

    public getColor(){
        // return this.color + this.precio;
        return this.color;
    }

}


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


























