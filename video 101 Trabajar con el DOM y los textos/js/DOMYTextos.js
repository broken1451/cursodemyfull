    
$(document).ready(function () {  

   console.log("Jquery esta instalado y funcionando");

   reloadLinks()

   $("#addButton").removeAttr("disabled")
                  .click(function () { 
  
   // $("#addLink").val(); 
   // console.log( $("#addLink").val())

   $("#menu").append(('<li> <a href="' + $("#addLink").val() +'"></a></li>'));
   $("#addLink").val(" ");
   $("#addLink").focus();
   reloadLinks();
});


//////////////////////////////////////////////////////////////////////////////////////////////

      console.log($("a").length);

      function reloadLinks() { 

          $("a").each(function (index) { 
                // console.log($(this))
                // var that = $(this);
                // var enlace = that.attr("href")
                $(this).attr("href");//añadir atributo
                $(this).attr("target","blank")
                $(this).text($(this).attr("href"));
                     // $(this).text(enlace)
                        console.log($(this).attr("href"));
                        // console.log($(this).text($(this).attr("href")));
            });
      } 

 });




























      //    //ver si el elemento tiene la clase hasClass
      //    if ($(this).hasCLass('cebra')) {
      //       console.log("pase por este if");
      //       $(this).addCLass('grande');
      //  }