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


var camiseta = new Clases("rojo","Manga corta","cocodrilo","xl",45);

camiseta.setColor("Rojo");
  //camiseta.getColor();
console.log(camiseta);


var pantalon = new Clases("Azul","shrot","nike","xl",15);

pantalon.setColor("Blue");
    // pantalon.getColor();
console.log(pantalon);


























