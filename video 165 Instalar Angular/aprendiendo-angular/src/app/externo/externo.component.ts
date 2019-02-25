import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userID: any;
  public fecha: any;
  public newuser: any;
  public usuarioGuardado: any;

  constructor(private peticionesService: PeticionesService ) {

    this.userID = 1;
    // llenar el arreglo por post como lo indica el api
    this.newuser = {
      'name': '',
      'job': ''
    };

  }

  ngOnInit() {
    /*    this.peticionesService.getUser().subscribe((datos: any) => {
      console.log(recoje los resultados,data);
    }, (error) => { console.log(recoje el posible error,error); });*/

    // this.peticionesService.getUser().subscribe((datos: any) => {
    //   this.user = datos.data;
    //   console.log(datos);
    //   console.log(datos.data);
    // }, (error) => { console.log(error); });
    this.fecha = new Date();
    this.cargaUsuario();
  }


  cargaUsuario() {
    this.user = false;
    this.peticionesService.getUser(this.userID).subscribe((datos: any) => {
      this.user = datos.data;
      console.log(datos);
      console.log(datos.data);
    }, (error) => { console.log(error); });
  }

  onSubmit(form) {
    this.peticionesService.addUser(this.newuser)
    .subscribe((usuarioNuevo) => {
      this.usuarioGuardado = usuarioNuevo;
      console.log(usuarioNuevo);
      form.reset();
    }, (error) => {console.log('El error es: ', error);
  });
  }


}
