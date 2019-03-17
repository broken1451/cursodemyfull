'use strict';

// usando el modulo de express para crear las rutas y usar el modulo de express
var express = require('express');


// cargando los controladores
var ProyectController = require('../controllers/proyectController');


// configurar el middlewares son capas/metodos q se ejecutan antes de ejecutar la accion de un controlador, ejecutar el resultado de la peticion y despues se ejecuta la funcionalidad principal de la ruta que estemos llamando
// se importa el plugin
var multipart = require('connect-multiparty');

// donde se van a subir los archivos
var multipartMiddleware = multipart({uploadDir:'./upload'});

// creando las rutas 
var router = express.Router();
    //router.get('/home', objeto del controlador. metodo home);
router.get('/home', ProyectController.home);
router.post('/test', ProyectController.test);
router.post('/saveProyect', ProyectController.saveProyect);
// router.get('/proyect/:id?');//parametro opcional
// router.get('/proyect/:id');//parametro obligatorio
router.get('/proyect/:id?', ProyectController.getProyect);//parametro obligatorio
router.get('/proyects',ProyectController.getProyects);
router.put('/proyect/:id', ProyectController.updateProyect);// metodo para actualizar
router.delete('/proyect/:id', ProyectController.deleteProyect);// metodo para borrar
router.post('/uploadImage/:id', multipartMiddleware, ProyectController.uploadImage);
router.get('/getImage/:image', ProyectController.getImageFile);

//Exportar el modulo de routes para poder usarlos desde afuera de este archivo
module.exports = router;