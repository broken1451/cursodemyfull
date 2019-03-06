import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

public usuario: ContactoUsuario;
public mostrarDataForm: any;
  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '');
   }


  ngOnInit() {
  }

  onSubmit(formContacto: any) {
    console.log('Funciona el onSubmit');
    this.mostrarDataForm = this.usuario.nombre;
    console.log('El objeto usuario como forma completa tiene: ', this.usuario);
    console.log('El objeto usuario tiene como valor una propiedad llamada nombre: ', this.usuario.nombre);
    console.log('El formulario tiene como valor completo:', formContacto);
    // formContacto.reset();
  }

}
