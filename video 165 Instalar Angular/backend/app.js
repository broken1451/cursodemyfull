'use strict';

// Crear el servidor con NodeJS

var express = require('express'); // cargar el modulo de express

var bodyParser = require('body-parser'); // cargar el modulo de bodyParser

var app = express(); // se ejecuta la variable express


// cargar archivos de rutas
var proyectRoutes = require('./routes/proyectRoutes');



//middlewares son capas/metodos q se ejecutan antes de ejecutar la accion de un controlador, ejecutar el resultado de la peticion y despues se ejecuta la funcionalidad principal de la ruta que estemos llamando

app.use(bodyParser.urlencoded({extended:false})); // configuracion para bodyparse

app.use(bodyParser.json()); // conviertelo a JSON



//cors




//rutas
  
 app.use('/', proyectRoutes);
 





/*
     //app.get('ruta', funcion de callback(req son los datos que yo puedo estar enviandole desde el cliente o la peticion que se haga ,res es la respuesta q estoy enviando);

    app.get('/', (req, res) => {
        
        res.status(200).send(
            '<h1>Pagina de inicio del api de NodeJS</h1>'
        );
    
    });

    app.get('/test', (req, res) => {
    
        res.status(200).send({
            message: 'Hola mundo desde mi api de NodeJS'
        });
    
    });

    app.post('/test1/:id', (req, res) => {
    
        console.log('La req tiene como valor:', req);
        //   Use req.params, req.body, or req.query instead app.js:55:55
        // console.log('La req tiene como valores:', req.nombre);
        // params es para la url
        // console.log('La req tiene como valores:', req.param('nombre'));
        console.log('La req tiene como valores  como parametros del body: req.body.nombre ', req.body.nombre);
        console.log('La req tiene como parametro por la url q se envia por get valores: req.query.web ', req.query.web);
        console.log('La req tiene como parametro q se envia por la forma de la ruta en la url de nodejs como valores: req.param.id', req.params.id);
        res.status(200).send({
            message: 'Hola mundo desde mi api de NodeJS'
        });
    
    });
    
    app.get('/test/otra', (req, res) => {
        
        res.status(200).send(
            '<h1>Pagina de inicio del api de NodeJS MMGVO :v</h1>'
        );
    
    });
    
*/
   



//exportar modulos
module.exports = app;
