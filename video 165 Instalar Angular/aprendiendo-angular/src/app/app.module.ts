import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({ // configura los modulos
  declarations: [// cargar los componentes,diretivas y pipes
    AppComponent,
    VideojuegosComponent,
    ZapatillasComponent,
    CursosComponent
  ],
  imports: [ // para importar/cargar modulos de angular o externos o creados nosotros
    BrowserModule
  ],
  // providers sirve para cargar servicios
  providers: [],
  bootstrap: [AppComponent] // Modulo principal que se va a cargar el que inicia la app
})
export class AppModule { }
