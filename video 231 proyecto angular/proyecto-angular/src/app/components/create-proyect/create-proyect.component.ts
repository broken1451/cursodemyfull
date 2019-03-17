import { Component, OnInit } from '@angular/core';

// Modelo
import { Proyect } from 'src/app/models/proyect';

// Servicio
import { ProyectService } from '../../service/proyect.service';
import { UploadService } from 'src/app/service/upload.service';


// Variable global
import { Global } from 'src/app/service/global';




@Component({
  selector: 'app-create-proyect',
  templateUrl: './create-proyect.component.html',
  styleUrls: ['./create-proyect.component.css'],
  providers: [UploadService, ProyectService]
})
export class CreateProyectComponent implements OnInit {

  public title: string;
  public proyect: Proyect;
  public status: string;
  public fileToUpload: Array<File>; // variable para subir
  public saveProyect;


  constructor( private proyectService: ProyectService, private uploadService: UploadService) {
    this.title = 'Editar Proyecto';
    this.proyect = new Proyect('', '', '', '', 2019 , '', '');
   }

  ngOnInit() {

  }


  onSubmit(proyectForm: any) {
    console.log('El valor de proyectForm es: ', proyectForm);
    console.log('El valor de this.proyect es: ', this.proyect);
    // this.proyectService.saveProyect(esta es la variable proyecto de este componente)

      // GUARDAR LOS DATOS
    this.proyectService.saveProyect(this.proyect).subscribe((res: any) => {
      console.log('El valor de res es', res);
      console.log('El valor de res.proyect es', res.project);
      if (res.project) {

        // GUARDAR IMAGEN
          // this.proyectService.makeFileRequest( (urlApi + 'metodo'+ ParametroId del doc ) primer parametro, [parametros opcionales] 2do parametro, (archivos para subir this.fileToUpload) 3er parametro, (nombre del campo q va a recibir el backend - 'image')
          if (this.fileToUpload ) {
          this.proyectService.makeFileRequest(Global.url + 'upload-image/' + res.project._id, [], this.fileToUpload, 'image')
         .then((resultDelServicioYapi: any) => {
          this.status = 'success';
          this.saveProyect = resultDelServicioYapi.project;
          proyectForm.reset(); // Resetear el formulario una ves guardado
          console.log('La resultDelServicioYapi es: ', resultDelServicioYapi);
          console.log('El this.saveProyect tiene como valor: ', this.saveProyect);
          });
        } else {
          this.status = 'success';
          this.saveProyect = res.project;
          proyectForm.reset(); // Resetear el formulario una ves guardado
          console.log('La res es: ', res);
          console.log('El this.saveProyect tiene como valor: ', this.saveProyect);
        }

      } else {
        this.status = 'failed';
      }
    }, (err) => { console.log('El error es: ', err); });

  }






  fileChangeEvent(eventfileChange: any) {
    console.log('El evento fileChange del input file tiene como valor: ', eventfileChange);
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.fileToUpload = <Array<File>> eventfileChange.target.files; // aca se forzara q sea de este tipo y se le asiga a esta propiedad todos los archivos que queremos subir
    console.log('this.filesToUpload tiene como  valor: ', this.fileToUpload);
  }


}





















































































































































































/*

  onSubmit(proyectForm: any) {
    console.log('El valor de proyectForm es: ', proyectForm);
    console.log('El valor de this.proyect es: ', this.proyect);
    // this.proyectService.saveProyect(esta es la variable proyecto de este componente)

      // GUARDAR LOS DATOS
    this.proyectService.saveProyect(this.proyect).subscribe((res: any) => {
      if (this.proyect) {

        // SUBIR IMAGEN
        this.proyectService.makeFileRequest(Global.url + 'upload-image/' + this.proyect._id, [], this.fileToUpload, 'image')
        .then((resultDelServicioYapi: any) => {

          this.status = 'success';
          proyectForm.reset(); // Resetear el formulario una ves guardado
          console.log('El valor de resultDelServicioYapi es: ', resultDelServicioYapi);
          });



      } else {
        this.status = 'failed';
      }
      console.log('La respuesta es res: ', res);
    }, (err) => { console.log('El error es: ', err); });
  }






   onSubmit(form) {

    // Guardar datos básicos
     this.proyectService.saveProyect(this.proyect).subscribe(response => {
       console.log(response.project);
       if (response.project) {

         // sube imagen
         this.proyectService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
         .then((result: any) => {
           this.status = 'success';
           form.reset();
           console.log(result);
         });

       } else {
         this.status = 'failed';
       }
     },
     err => {
       console.log(err);
     });

 }




*/
