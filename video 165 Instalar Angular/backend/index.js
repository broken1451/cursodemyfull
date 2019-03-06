'use strict';

// conectar la base de datos de MongoDB con nodeJS
var mongoose = require('mongoose'); // importar el modulo de mongoose

// variable q tiene el servidor
var app = require('./app');
var port = 3700;


mongoose.Promise = global.Promise; // paso para conectar la bd de mongo debe ser una promesa 

// conecciona a la bd
    // mongoose.connect(parametro es la url de la base de datos)
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then((data) => {

           console.log('Los datos de la bd de mongo son:', data); 
           
           console.log('Conexion a la bd exitosamente'); 

         // Creacion del servidor y llamada al servidor
            //  app.listen(puerto,funcion de callback) 
            app.listen(port, () => {
                console.log('Conexion del servidor exitosamente en la url://localhost:3700'); 
            });

        }).catch((err) => {
            console.log('El error es:', err); 
        });

// para conectarse y saber si esta node conectandose a mongodb se ejecuta por consola npm start en la ruta del backend donde se tiene el archivo



