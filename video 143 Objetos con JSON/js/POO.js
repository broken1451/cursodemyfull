
var bicicleta = {
    color:"Rojo",
    marca:"BMX",
    freno:"Disco",
    velocidad:"40km",
        cambiaColor:function (nuevoColor) { 
             console.log("Estoy dentro de la funcion cambiaColor");
             this.color = nuevoColor;
             console.log(nuevoColor);
             console.log(this);
         }
};

console.log(bicicleta);
bicicleta.cambiaColor("BLUE");























