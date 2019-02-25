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
    // formContacto.reset();
    console.log(this.usuario);
    console.log(this.usuario.nombre);
  }

}
