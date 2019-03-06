
'use strict';

// crear modelos
var mongoose = require('mongoose'); // importar el modulo de mongoose

// Esquemas
var Schema = mongoose.Schema;

// molde sobre el cual se utilizara para crear nuevos proyectos en la bd, nuevos documentos de este tipo
var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    // langs: [String] asi se define un array
    langs: String,
    image: String
});

// exportar el modulo
    //module.exports - mongoose.model('Nombre de la entidad', Esquemas); esto para q mongo use este esquema o modelo
module.exports = mongoose.model('Proyect', ProjectSchema);
    //proyects --> guarda los documentos en esa coleccion y cuando hagamos save de este modelo se guarde en la bd 

