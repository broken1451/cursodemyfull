/*Js principal*/




$(document).ready(function () {
    
if (window.location.href.indexOf("index") > -1) {
        //Slider
    
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            pager:false,
    });
    
}  


    
if (window.location.href.indexOf("index") > -1) {  
    //Post
    var posts = [
        {title:"Prueba de titulo",date: "Publicado:" + moment().format("MMMM Do YYYY, h:mm:ss a"),content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis eius facere sequi rerum aperiam. Magni maxime modi placeat possimus dicta, et, minus natus itaque, pariatur similique porro aliquid repellat.Lorem ipsum dolor sit amet consectetur adipisicing elitEum officiis eius facere sequi rerum aperiam. Magnmaxime modi placeat possimus dicta, et, minus natuitaque, pariatur similique porro aliquid repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit molestiae in nihil rem, commodi voluptatibus, officiis ab voluptatum esse quia repudiandae! Molestiae nulla sequi unde saepe minus fuga atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reprehenderit harum, delectus quidem unde ab, obcaecati ratione autem facilis iure odio eius voluptas temporibus veniam? Dolores architecto rem fuga accusantium!"},
        {title:"Prueba de titulo 2",date:"Publicado:" + moment().format("MMMM Do YYYY, h:mm:ss a"),content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis eius facere sequi rerum aperiam. Magni maxime modi placeat possimus dicta, et, minus natus itaque, pariatur similique porro aliquid repellat.Lorem ipsum dolor sit amet consectetur adipisicing elitEum officiis eius facere sequi rerum aperiam. Magnmaxime modi placeat possimus dicta, et, minus natuitaque, pariatur similique porro aliquid repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit molestiae in nihil rem, commodi voluptatibus, officiis ab voluptatum esse quia repudiandae! Molestiae nulla sequi unde saepe minus fuga atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reprehenderit harum, delectus quidem unde ab, obcaecati ratione autem facilis iure odio eius voluptas temporibus veniam? Dolores architecto rem fuga accusantium!"},
        {title:"Prueba de titulo 3",date:"Publicado:" + moment().format("MMMM Do YYYY, h:mm:ss a"),content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis eius facere sequi rerum aperiam. Magni maxime modi placeat possimus dicta, et, minus natus itaque, pariatur similique porro aliquid repellat.Lorem ipsum dolor sit amet consectetur adipisicing elitEum officiis eius facere sequi rerum aperiam. Magnmaxime modi placeat possimus dicta, et, minus natuitaque, pariatur similique porro aliquid repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit molestiae in nihil rem, commodi voluptatibus, officiis ab voluptatum esse quia repudiandae! Molestiae nulla sequi unde saepe minus fuga atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reprehenderit harum, delectus quidem unde ab, obcaecati ratione autem facilis iure odio eius voluptas temporibus veniam? Dolores architecto rem fuga accusantium!"},
        {title:"Prueba de titulo 4",date:"Publicado:" + moment().format("MMMM Do YYYY, h:mm:ss a"),content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis eius facere sequi rerum aperiam. Magni maxime modi placeat possimus dicta, et, minus natus itaque, pariatur similique porro aliquid repellat.Lorem ipsum dolor sit amet consectetur adipisicing elitEum officiis eius facere sequi rerum aperiam. Magnmaxime modi placeat possimus dicta, et, minus natuitaque, pariatur similique porro aliquid repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit molestiae in nihil rem, commodi voluptatibus, officiis ab voluptatum esse quia repudiandae! Molestiae nulla sequi unde saepe minus fuga atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reprehenderit harum, delectus quidem unde ab, obcaecati ratione autem facilis iure odio eius voluptas temporibus veniam? Dolores architecto rem fuga accusantium!"},
        {title:"Prueba de titulo 5",date:"Publicado:" + moment().format("MMMM Do YYYY, h:mm:ss a"),content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis eius facere sequi rerum aperiam. Magni maxime modi placeat possimus dicta, et, minus natus itaque, pariatur similique porro aliquid repellat.Lorem ipsum dolor sit amet consectetur adipisicing elitEum officiis eius facere sequi rerum aperiam. Magnmaxime modi placeat possimus dicta, et, minus natuitaque, pariatur similique porro aliquid repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione odit molestiae in nihil rem, commodi voluptatibus, officiis ab voluptatum esse quia repudiandae! Molestiae nulla sequi unde saepe minus fuga atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reprehenderit harum, delectus quidem unde ab, obcaecati ratione autem facilis iure odio eius voluptas temporibus veniam? Dolores architecto rem fuga accusantium!"}];
        
        
                /*
                    posts.forEach((elemento,indice) => {
           
                        var post =`
                        <article class="post">
                        <h2>${elemento.title}</h2>
                        <span class="date">${elemento.date}</span>
                        <p>${elemento.content}</p>
                        <a href="#" class="buton-more">Leer mas</a>
                    </article>
                        `; 
    
                        $("#post").append(post);
                        console.log(post);
        
                    });
       
                */
    
      posts.map((elemento,i) =>{
        var post =`
        <article class="post">
        <h2>${elemento.title}</h2>
        <span class="date">${elemento.date}</span>
        <p>${elemento.content}</p>
        <a href="#" class="buton-more">Leer mas</a>
        </article>
        `; 
    
        $("#post").append(post);
        console.log(post);
    
      });

}



  //Selector de themas
        //href="css/green.css"

  var thema =  $("#theme");
  $("#toGreen").click(function () { 

    thema.attr("href", "css/green.css");
    console.log("cambio color"); 
  });

  $("#toRed").click(function () { 

    thema.attr("href", "css/red.css");
    console.log("cambio color"); 
  });

  $("#toBlue").click(function () { 

    thema.attr("href", "css/blue.css");
    console.log("cambio color"); 
  });

    

//Scroll ir arriba

    $(".subir").click(function (e) { 
        e.preventDefault();
      $("html,body").animate({
          scrollTop:0
      },500);
        return false;
    });


// login falso

    $("#login form").submit(function (e) { 
     
        var nombre = $("#name").val();
            localStorage.setItem("name",nombre);
            console.log(nombre);
    });
    
var variableNombre = localStorage.getItem("name");

if (variableNombre != null && variableNombre != undefined && variableNombre != " ") {

    $("#about p").html(" <br> <strong> Welcome " + variableNombre + "</strong>");
    $("#about p").append("<a href='#' id='logout'> Cerrar sesion </a>");
    $("#login").hide();
    $("#logout").click(function () { 
        localStorage.clear();
        location.reload();//redireccionar la pagina a la princial con todo
        return false;
    });
}    

console.log(variableNombre);
console.log(posts);



if (window.location.href.indexOf("about") > -1){
    //Acordeon
    $("#acordeon").accordion();


}


if (window.location.href.indexOf("reloj") > -1){
    
//Reloj
   setInterval(function () { 
    var reloj = moment().format("hh:mm:ss a");
    $("#reloj").html(reloj);
    console.log(reloj);
    },1000);
}

//Validacion 
if (window.location.href.indexOf("contacto") > -1){

    // $("#fecha").datepicker({
    $("form input[name='fecha']").datepicker({
       dateFormat:"dd-mm-yy"
    });

    $.validate({
        lang: 'es',
        errorMessagePosition : 'top',
        scrollToTopOnError : true
     });

}

});

