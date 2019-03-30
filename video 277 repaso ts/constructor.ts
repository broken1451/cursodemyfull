
class Coche {
 
    //variables
      public color:string;
      public modelo:string;
      public velocidad:number;


// Constructor
    constructor(modelo = null){ // parametro opcional 
     // su principal funcion es inicializar variables y es el primer metodo de la clase que se ejecuta
        
        this.color = 'white';
        this.velocidad = 0;

        if ( modelo == null ) {
            this.modelo = 'Audi';
        }else{
            this.modelo = modelo;
        }
     
    
    }



   
     // Metodos
       public getColor(){
           return this.color; // retorna el color
       }
   
       public setColor(color:string){
           this.color= color; // asignamos un color
       }



       public getModelo(){
        return this.modelo; // retorna el modelo
       }

       public setModelo(modelo:string){
        this.modelo= modelo; // asignamos un modelo
       }



    
       public acelerar(){
           this.velocidad = this.velocidad + 1;
        // this.velocidad++;
       }

       public frenar(){
        // this.velocidad = this.velocidad - 1;
        this.velocidad--;
       }

       public getVelocidad():number{
        return this.velocidad;
       }

   
   }
   
   
// crear el objeto 
   var coche = new Coche('FIAT');
   var coche2 = new Coche();
   var coche3 = new Coche();
//    coche.setColor('rojo mmgvo');
//    coche2.setColor('verde mmgvo');
//    coche3.setColor('azul mmgvo');
//    console.log('El color del coche es: ' + coche.getColor());
//    console.log('El color del coche es: ' + coche2.getColor());
//    console.log('El color del coche es: ' + coche3.getColor());
   
// Metodos funcionando 
 coche.acelerar();
 coche.acelerar();
 coche.acelerar();

 
//  coche.setModelo('hasudfhdufhdsifhdsfihdufidf');
 console.log('El color del coche es: ' + coche.getColor());
 console.log('El modelo del coche es: ' + coche.getModelo());
 console.log('La velocidad del coche es: ' + coche.getVelocidad());
 coche.frenar(); 
 console.log('La velocidad despues que coche frena es: ' + coche.getVelocidad());  
   