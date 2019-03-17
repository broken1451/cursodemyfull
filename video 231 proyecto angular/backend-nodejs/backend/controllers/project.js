'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path'); // cargar rutas fisicas del sistema de archivos

var controller = {
	
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de project"
		});
	},

	saveProject: function(req, res){
		var project = new Project();

		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		project.save((err, projectStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({project: projectStored});
		});
	},

	getProject: function(req, res){
		var projectId = req.params.id;

		if(projectId == null) return res.status(404).send({message: 'El proyecto no existe.'});

		Project.findById(projectId, (err, project) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!project) return res.status(404).send({message: 'El proyecto no existe.'});

			return res.status(200).send({
				project
			});

		});
	},

	getProjects: function(req, res){

		Project.find({}).sort('-year').exec((err, projects) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!projects) return res.status(404).send({message: 'No hay projectos que mostrar.'});

			return res.status(200).send({projects});
		});

	},

	updateProject: function(req, res){
		var projectId = req.params.id;
		var update = req.body;

		Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

			return res.status(200).send({
				project: projectUpdated
			});
		});

	},

	deleteProject: function(req, res){
		var projectId = req.params.id;

		Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!projectRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				project: projectRemoved
			});
		});
	},

	uploadImage: function(req, res){
		var projectId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						project: projectUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

    },
    

	getImageFile: function(req, res){
        // pamaremeto q se recoje por la url 
        var file = req.params.image;

        //ruta fisica de la imagen
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	}
};

module.exports = controller;




/*



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
       // ProyectModel.find({year:2019}) saca todos los documentos q hay en la bd
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
   },

   // Metodo para subir imagenes 
   uploadImage: function (req, res) {
        //recojer un parametro q vendra por la url
         var proyectId = req.params.id;
        
         var fileName = 'imagen no subida';
         
         //req.files no existe en nodejs hay q usar un plugin 
         if (req.files) {
             console.log('El req.files tiene como valor: ', req.files);
            
            // sacar valores de la imagen
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extensionSplit = fileName.split('.');
            var fileExtension = extensionSplit[1]

                if (fileExtension == 'png' || fileExtension == 'jpg' || fileExtension == 'jpeg' || fileExtension == 'gif') {
                
                  ProyectModel.findByIdAndUpdate(proyectId,{image:fileName},{new:true},(err,proyectUpdate) => {
                
                    if (err) {
                        console.log('El error  al actualizar la bd es: ', err);
                        return res.status(500).send({message:'La imagen no se ha subido'});
                    }
    
                    if (!proyectUpdate) {
                        console.log('El proyectUpdate tiene como valor: ', !proyectUpdate);
                        return res.status(404).send({message:'El proyecto no existe y no se puede asiganr una imagen'});
                    }
    
                    console.log('El valor de proyectUpdate es: ', proyectUpdate); 
                    return res.status(200).send({proyectUpdate:proyectUpdate});
    
                       // return res.status(200).send({file:req.files});
                     // return res.status(200).send({files:fileName});
                  });
             } else {
                // se usara la libreria fs para borrar un archivo
                    // fs.unlink(archivo a borrar, funcion de callback(err))
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.log('El error al borrar es: ', err);
                        return res.status(500).send({message:'El archivo no se ha podido borrar'});
                    }

                    return res.status(200).send({message:'La extesion del archivo no es valida'});

                });
             }


         } else {
            console.log('El fileName tiene como valor: ', fileName);
            return res.status(200).send({message:fileName}); 
         }
         console.log('El fileSplit tiene como valor: ', fileSplit);
         console.log('El fileName tiene como valor: ', fileName);
         console.log('El extensionSplit tiene como valor: ', extensionSplit);
         console.log('El fileExtension tiene como valor: ', fileExtension);


   },
   getImageFile: function (req, res) {
       
    var file = req.params.image;
    var pathFile = './upload/' + file;

  fs.exists(pathFile, (exists) =>{
     if (exists) {
         return res.sendFile(path.resolve(pathFile));
     } else {
         return res.status(200).send({
             message: 'No existe la imagen'
         });
     }
  });
   
}






};

*/ 

