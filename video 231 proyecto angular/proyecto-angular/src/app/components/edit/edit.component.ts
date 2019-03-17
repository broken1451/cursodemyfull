import { Component, OnInit } from '@angular/core';

// Modelo
import { Proyect } from 'src/app/models/proyect';

// Servicio
import { ProyectService } from '../../service/proyect.service';
import { UploadService } from 'src/app/service/upload.service';


// Variable global
import { Global } from 'src/app/service/global';


// router y Parametros por la url
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create-proyect/create-proyect.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public title: string;
  public proyect: Proyect;
  public status: string;
  public fileToUpload: Array<File>; // variable para subir
  public saveProyect;
  public url: string;

  constructor( private proyectService: ProyectService, private uploadService: UploadService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.title = 'Editar proyecto';
    this.url = Global.url;
   }



  ngOnInit() {
    this.activatedRoute.params.subscribe((parametrosUrl) => {
      const id = parametrosUrl.id;

      this.getProyect(id);

      console.log('Los parametros de la url son parametrosUrl: ', parametrosUrl);
    });
  }


  getProyect(id: any): any {
    this.proyectService.getProyect(id).subscribe(res => {
      this.proyect = res.project;
      console.log('La res tiene como valor:', res);
      console.log('La this.proyect tiene como valor:', this.proyect);
    }, (err) => {console.log(err); });
  }



  onSubmit(): any {
    this.proyectService.updateProyect(this.proyect).subscribe((res) => {

      if (res.project) {

        // GUARDAR IMAGEN
          // this.proyectService.makeFileRequest( (urlApi + 'metodo'+ ParametroId del doc ) primer parametro, [parametros opcionales] 2do parametro, (archivos para subir this.fileToUpload) 3er parametro, (nombre del campo q va a recibir el backend - 'image')
        if (this.fileToUpload ) {
          this.proyectService.makeFileRequest(Global.url + 'upload-image/' + res.project._id, [], this.fileToUpload, 'image')
          .then((resultDelServicioYapi: any) => {
            this.status = 'success';
            this.saveProyect = resultDelServicioYapi.project;
            console.log('La resultDelServicioYapi es: ', resultDelServicioYapi);
            console.log('El this.saveProyect tiene como valor: ', this.saveProyect);
          });
        } else {
          this.status = 'success';
          this.saveProyect = res.project;
          console.log('La res es: ', res);
          console.log('El this.saveProyect tiene como valor: ', this.saveProyect);
        }

      } else {
        this.status = 'failed';
      }

      console.log('La res tiene como valor:', res);
      console.log('La this.saveProyect tiene como valor:', this.saveProyect);
    }, (err) => {console.log(err); });
   }


   fileChangeEvent(eventfileChange: any) {
    console.log('El evento fileChange del input file tiene como valor: ', eventfileChange);
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    this.fileToUpload = <Array<File>> eventfileChange.target.files; // aca se forzara q sea de este tipo y se le asiga a esta propiedad todos los archivos que queremos subir
    console.log('this.filesToUpload tiene como  valor: ', this.fileToUpload);
  }

}
