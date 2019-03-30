
class Coche {
 
    //variables
      public color:string;
      public modelo:string;
      public velocidad:number;


// Constructor
    constructor(modelo = null){
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
        return this.modelo; // retorna el color
       }

       public setModelo(modelo:string){
        this.modelo= modelo; // asignamos un color
       }


// protected solo se puede acceder desde la clase q los define o cualquier clase que herede de esta
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
   var coche = new Coche('Coupe');
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

 console.log('El color del coche es: ' + coche.getColor());
 console.log('El modelo del coche es: ' + coche.getModelo());
 console.log('La velocidad del coche es: ' + coche.getVelocidad());
 coche.frenar(); 
 console.log('La velocidad despues que coche frena es: ' + coche.getVelocidad());  
   