$(document).ready(function () {
    

  console.log("Jquery esta instalado y funcionando");
  console.log($("a").length)
    
/*       
         $("a").each(function (index) { 
    
           $(this).attr("href");//selecciono el texto q hay en ese atributo
           $(this).text($(this).attr("href"));//meter lo q que tiene el atributo href como texto en la etiqueta a
            
           // console.log($(this));
           console.log( $(this).attr("href"));
    
       }); 
*/
 
    links();

    $("#addButton").removeAttr("disabled");

    $("#addButton").click(function () { 
        
        // $("#addLink").val();
        // console.log( $("#addLink").val())

        // $("#menu").html('<li><a href="'+ $("#addLink").val()+'"></a></li>');
        // $("#menu").prepend('<li><a href="'+ $("#addLink").val()+'"></a></li>');
        // $("#menu").append('<li><a href="'+ $("#addLink").val()+'"></a></li>');
        // $("#menu").before('<li><a href="'+ $("#addLink").val()+'"></a></li>');
        // $("#menu").after('<li><a href="'+ $("#addLink").val()+'"></a></li>');

       
        $("#menu").append('<li><a href="'+ $("#addLink").val()+'"></a></li>');
        $("#addLink").val(" ");
        $("#addLink").focus();



        links();


                /*        
                console.log($("a").length)
    
                 $("a").each(function (index) { 
     
                     $(this).attr("href");//selecciono el texto q hay en ese atributo, agregar un atributo
                        $(this).text($(this).attr("href"));//meter lo q que tiene el atributo href como texto en la etiqueta a
             
                     // console.log($(this));
                        console.log( $(this).attr("href"));
     
                }); 
                */
 
    });

 

//////////////////////////////////////////////////////////////////////////////////


function links() {
    console.log($("a").length)
    
       $("a").each(function (index) { 
    
           $(this).attr("href"); //selecciono el texto q hay en ese atributo, agregar un atributo
           $(this).attr("target","_blank");//agregar un atributo
           $(this).text($(this).attr("href"));//meter lo q que tiene el atributo href como texto en la etiqueta a
        
           // console.log($(this));
           console.log( $(this).attr("href"));
    
       });
    
}
    
    











});