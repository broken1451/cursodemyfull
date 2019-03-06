'use strict';

var ProyectModel = require('../models/proyectModels'); // importar el modelo



//metodos / devolver un objeto json
var controller= {
   home: function (req, res) {
        return res.status(200).send({
            message: 'Hola mundo soy la Home  de mi api de NodeJS del controlador proyect'
        });
   },

   test: function (req, res) {
    return res.status(200).send({
        message: 'Soy el metodo o accion Test del api de node del controlador proyect'
    });
   },

   // Metodo de guardar en la BD
   saveProyect:function (req, res) {
       //crear un nuevo proyecto
        var proyect = new ProyectModel();
        var params = req.body;
        proyect.name = params.name;
        proyect.description = params.description;
        proyect.category = params.category;
        proyect.year = params.year;
        proyect.langs = params.langs;
        proyect.image = null;

        //Guardar en la BD
            //proyect.save( funcion de callback )
        proyect.save( (err, proyectStored) => {
            if (err) {
                console.log('El error del guardado de la bd son: ', err);
                return res.status(500).send('Error en en la peticion de guardar');
            }

            if (!proyectStored) {
                console.log('El error del guardado de la bd son: ', !proyectStored);
                return res.status(404).send({
                 
                    message: 'No se ha podido guardar el proyecto',
                });
            }
           
            console.log('El proyectStored tiene como valor: ', proyectStored);    
            return res.status(200).send({
                
                proyectStored:proyectStored
            });
            

           

        });

        console.log('Los parametros del body son: ', params);
        console.log('El objeto proyect tiene como valor: ', proyect);
        // return res.status(200).send({
        //     message: 'metodo saveProyect funcionando',
        //     params: params,
        //     proyect:proyect
        // });

   },

   // Metodo de obtener un producto de la BD
   getProyect: function (req,res) {
        //recojer un parametro q vendra por la url
            var proyectId = req.params.id;

            if (proyectId == null) {
                console.log('El id de la bd es null su valor es: ', proyectId);
                return res.status(404).send({message:'El Proyecto en bd no existe:'});
            }

    // propiedad de mongoose, buscar una cosa en la bd
        //  ProyectModel.findById(parametro 'id del documento a buscar', funcion de callback)
    ProyectModel.findById(proyectId, (err,getProyect) => {

        if (err) {
            console.log('El error  al consultar la bd es: ', err);
            return res.status(500).send({message:'Error en en la peticion al devolver los datos'});
        }

        if (!getProyect) {
            console.log('El getProyect bd no existe: ', !getProyect);
            return res.status(404).send({message:'El Proyecto en bd no existe:'});
        }

        console.log('El getProyect bd existe y tiene como valor: ', getProyect);
        return res.status(200).send({
            getProyect: getProyect
        });

    });

    console.log('El valor de proyectId es: ', proyectId); 
   
    
   },

   // Metodo de obtener todos los  productos de la BD
   getProyects: function (req, res) {
       // ProyectModel.find({}) saca todos los documentos q hay en la bd
       // ProyectModel.find({}).exec()  cuando ya saque todos los resultados ejecutamos una funcion de callback
       // ProyectModel.find({}).sort('-year / year').exec((err, proyects) => { ordenar por ano
    ProyectModel.find({}).sort('year').exec((err, proyects) => {

        if (err) {
            console.log('El error mostrar resultados en la bd son: ', err);
            return res.status(500).send({message:'Error al devolver resultados'});
        }

        
        if (!proyects) {
            console.log('El proyects tiene como valor: ', !proyects);
            return res.status(404).send({message:'No hay proyectos en bd para mostrar'});
        }

        
        console.log('El valor de proyects es: ', proyects); 
        return res.status(200).send(
            {proyects:proyects});
            
        });  
   },

   // Metodo de actualizar un producto de la BD
   updateProyect: function (req, res) {
       //recojer un parametro q vendra por la url
       var proyectId =  req.params.id;
       var update = req.body;

       // ProyectModel.findByIdAndUpdate(parametro de la url, parametro a actualizar,opciones para guardar nueva actualizacion de registro ,funcion de callback);

       ProyectModel.findByIdAndUpdate(proyectId, update,{new:true}, (err, proyectUpdate) => {
        
        if (err) {
            console.log('El error  al actualizar la bd es: ', err);
            return res.status(500).send({message:'Error en en la actualizacion de los datos'});
        }

        
        if (!proyectUpdate) {
            console.log('El proyectUpdate tiene como valor: ', !proyectUpdate);
            return res.status(404).send({message:'No existe el proyecto a actualizar'});
        }

        console.log('El valor de proyectUpdate es: ', proyectUpdate); 
        return res.status(200).send({proyectUpdate:proyectUpdate});
        
        
    });
    
       console.log('El valor de update es: ', update); 
       console.log('El valor de proyectId es: ', proyectId); 
   },

   // Metodo de eliminar un producto de la BD
   deleteProyect: function (req, res) {
    //recojer un parametro q vendra por la url
      var proyectId =  req.params.id;
    
    ProyectModel.findByIdAndDelete(proyectId,(err,proyectDelete) => {
            
        if (err) {
            console.log('El error al borrar la bd es: ', err);
            return res.status(500).send({message:'Error no se ha podido borrar el documento'});
        }

        if (!proyectDelete) {
            console.log('El valor de !proyectDelete es: ', !proyectDelete);
            return res.status(404).send({message:'No se puede eleminar ese proyecto'});
        }

        console.log('El valor de proyectDelete es: ', proyectDelete); 
        return res.status(200).send({proyectDelete:proyectDelete});        

    });

         console.log('El valor de proyectId es: ', proyectId); 
   }

};

// Exportar el modulo para usarlos fuera de este archivo
module.exports = controller;

















