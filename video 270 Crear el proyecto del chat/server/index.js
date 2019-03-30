var express = require('express'); //cargar el modulo o paquete de express

var app = express(); //llamar a la funcion o metodo de express

// var server = require('libreria que tiene node').metodo Server(app de express);
var server = require('http').Server(app);// cargar el servidor

// var io = requiere('libreria')(pasamos el servidor);
var io = require('socket.io')(server);


// Cargar vista statica con un middleware por defecto con nodeJS
  //app.use(express.metodo('todos los html que se encuentren en'));
    app.use(express.static('client'));


 
// Crear la rutas 
    //app.get('/holaMundo', funcion de callback)
    app.get('/holaMundo', (req, res) => {
        res.status(200).send({
            message:'Hola mundo desde un ruta'
        });
    });


// Enviar un mensaje por defecto al cliente
    var message = [{
        id:1,
        text: 'Welcome to private chat of Socket.io and NodeJS by Adrian Bravo',
        nickname: 'Bot - Broken1451'
    }];


// Abrir una conexion al socket io, el metodo on nos permite lanzar eventos
// io.metodo('evento', funcion de callback)
 io.on('connection', (socket) => {
    console.log('El cliente con la ip ' + socket.handshake.address + ' se ha conectado');
    
    // enviar mensaje al cliente 
    socket.emit('message', message);

    // recibir mensaje del cliente
        //socket.on('recojer un evento', funcion de callback )
    socket.on('add-Mensaje', (dataEnviadaFormulario) =>{
        message.push(dataEnviadaFormulario);
        
        // emitir todos los mensajes a todos los clientes conectados
        io.sockets.emit('message', message);
    });

});


// Creacion de un servidor con express
    // server.listen(puerto, funcion de callback )
    
server.listen(6677, () => {
    console.log('El servidor esta funcionando en el puerto 6677 con la ruta http://localhost:6677');
});
