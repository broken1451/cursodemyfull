"use strict";


window.addEventListener("load",function () { 

    //timer

    //set interval nos permite ejecutar un codigo cada cierto tiempo
 function iniciaEstilos () {
    var tiempo = setInterval(function ()  {
        
        console.log("Me voy a ejecutar cada 1 segundo");

        var encabe = document.querySelector("h1");
       
        if (encabe.style.fontSize == "30px") {
            encabe.style.fontSize="80px";
        }else{
            encabe.style.fontSize="30px"; 
        }
 
    }, 1000); 

    return tiempo;
}

var tiempo = iniciaEstilos();
 


       //set timeout nos permite ejecutar un codigo cada cierto tiempo una vez
                 var tiempo1 = setTimeout(function ()  {
                    
                    console.log("Me voy a ejecutar una vez ");

                    var parrafo = document.querySelector("#lorem");
                
                    if (parrafo.style.background == "black") {
                        parrafo.style.background="blue";
                    }else{
                        parrafo.style.background="black"; 
                    }
            
                }, 500); 

                

                
                
                var inicio = document.querySelector("#inicio");
                
                inicio.addEventListener("click",function () {
                    iniciaEstilos();
                });


                
                var stop = document.querySelector("#stop");
              
                
                stop.addEventListener("click",function () { 
                    alert("ahas parado el intervalo");
                    clearInterval(tiempo);
            
                 });
                
                
 });







