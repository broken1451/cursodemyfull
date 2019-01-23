


window.addEventListener("load",function () { 

    console.log("Dom cargado");


    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
         box_dashed.style.display="none";


    formulario,addEventListener("submit",function () { 
        console.log("evento submit capturado");
       
        var nombre = document.querySelector("#nombre").value; //value sacar el valoir q hay en el campo
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
        
        if (nombre ==null || nombre ==" "  || !isNaN(nombre)) {
            alert("nombre no es valido");
            var error = document.querySelector("#error");
            error.innerHTML="Nombre no es valido";
            return false;
        }

        if (apellido ==null || apellido ==" "  || !isNaN(apellido)) {
            alert("apellido no es valido");
            var error1 = document.querySelector("#error1");
            error1.innerHTML="apellido no es valido";
            return false;
        }

       
        if (edad ==null || edad ==" " || edad<=0 || isNaN(edad) ) {
            alert("edad no es valido");
            var error2 = document.querySelector("#error2");
            error2.innerHTML="edad no es valida";
            return false;
        }


        
        box_dashed.style.display="block";


   
        console.log(nombre, apellido, edad);

        var p_nombre = document.querySelector("#p_nombre span"); 
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span"); 

       p_nombre.textContent = nombre;
       p_apellido.textContent=apellido;
       p_edad.textContent=edad;
/*        
// una manera 
        datos_usuario=[nombre,apellido,edad];
        var indice;
        for (indice  in datos_usuario) {
            console.log(datos_usuario[indice]);
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        } */

        // parrafo.append(apellido);
        // parrafo.append(edad);

});






 });









