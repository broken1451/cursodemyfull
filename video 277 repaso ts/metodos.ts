
class Coche {
 
    //variables
      public color:string;
      public modelo:string;
      public velocidad:number = 0;
   
     // Metodos
       public getColor(){
           return this.color; // retorna el color
       }
   
       public setColor(color:string){
           this.color= color; // asignamos un color
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
   