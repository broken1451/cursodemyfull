import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Aprendiendo angular :v  con el master de js con angular';

  public mostrarVideoJuejos: boolean = true;
  public descripcion: string;
  public config;
  // ocultaVideoJuegos() {
  //   this.mostrarVideoJuejos = false;
  // }

    constructor() {
      this.title = Configuracion.titulo;
      this.descripcion = Configuracion.descripcion;
      this.config = Configuracion;
    }

  ocultaVideoJuegos(value) {
    this.mostrarVideoJuejos = value;
  }

  mostrarVideoJuegos() {
    this.mostrarVideoJuejos = true;
  }

}
