


// var socket = io.conmect('url donde esta la app',{'para la conexion se fuerze'})
var socket = io.connect('http://192.168.1.108:6677', {'forceNew':true});

// recibir el mensaje
 //socket.on('lo que se ha emito desde el servidor', (datosDelServidor) => {
socket.on('message', (datosDelServidor) => {
    console.log('Los datos que llegan del servidor son: ', datosDelServidor);
    render(datosDelServidor);
});


// Pintar los datos por pantalla
function render(datosDelServidor) {
    //   var html = datosDelServidor.map( (mensaje, indice) => {});
    var html = datosDelServidor.map( (message, index) => {
       //<strong>${variable que hay en el objeto del servidor}</strong>
     return (`
       
    <div class='message'
      <strong>${message.nickname}</strong> Dice:
      <p> ${message.text}</p>
    </div>
       
       `);
    }).join(' '); // para meter un espacio entre elemento y elemento

    var divMensajes=  document.querySelector('#messages');
        divMensajes.innerHTML= html;
        divMensajes.scrollTop = divMensajes.scrollHeight;
//   document.querySelector('#messages').append(html);


}

function addMensaje(eventoThisFormulario) {
    
    var mensajeEnviadoDeFormulario = {
        nickname: document.getElementById('nickname').value,
        text: document.querySelector('#text').value
    };

    document.getElementById('nickname').style.display='none';

    // enviar datos al servidor
    socket.emit('add-Mensaje', mensajeEnviadoDeFormulario);
    return false;
}




