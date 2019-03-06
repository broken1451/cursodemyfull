'use stric';

var parametros = process.argv.slice(2); // capturar parametros en nodeJS

var numero1= parseFloat(parametros[0]);
var numero2= parseFloat(parametros[2]);
var plantilla = `
La suma es de numero1 + numero2 es: ${numero1 + numero2}
La resta es de numero1 + numero2 es: ${numero1 - numero2}
La multiplicacion es de numero1 + numero2 es: ${numero1 * numero2}
La division es de numero1 + numero2 es: ${numero1 / numero2}
La resto es de numero1 + numero2 es: ${numero1 % numero2}`;


console.log('Hola mundo desde nodeJS');
console.log('la variable parametros tiene como valor: ', parametros);
console.log('El valor de numero1 es: ', numero1);
console.log('El valor de numero2 es: ', numero2);
console.log('Las operaciones matematicas son: ', plantilla);


// inciar un proyecto node se hace por consola mediante estas lineas
 // iniciar un proyecto de nodeJS
    // 1) npm init
    // 2) nombre del paquete 
    // 3) version
    // 4) descripcion
    // 5) entry point/punto de inicio del programa
    // 6) licencia MIT

// instalar dependencias de node para el servidor backend
    // 1) npm i express( es un framework y libreria sirve para trabajar servicios y protocolos http, nos permite definir rutas, tener un sistema de rutas,recibir peticiones http,crear acciones/metodos,etc)
    // 2) npm i body-parser(es una libreria q sirve para convertir las peticiones que se hacen al backend a un objeto JSON usado por JS)
    // 3) npm i connect-multiparty(esta libreria nos permite subir archivos al backend y poder trabajar con el protocolo files con la variables files poder recojer ficheros y guardarlos en una carpeta de mi servidor )
    // 4) npm i mongoose(es una libreria unorm para trabajar con mongoDB)
    // npm i nodemon --save-dev solo en desarrollo
    // 5) npm i nodemon --save-dev(esto nos va a permitir que cuando ejecutemos el servidor de nodeJS cada vez q se haga un cambio en el codigo automaticamete se refresque y se vuelva a reiniciar el servidor)
