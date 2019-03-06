'use strict';

// usando el modulo de express para crear las rutas y usar el modulo de express
var express = require('express');


// cargando los controladores
var ProyectController = require('../controllers/proyectController');


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


//Exportar el modulo de routes para poder usarlos desde afuera de este archivo
module.exports = router;