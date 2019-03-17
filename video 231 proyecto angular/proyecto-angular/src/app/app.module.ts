import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Http para hacer peticiones
import { HttpClientModule } from '@angular/common/http';

// Modulos de formularios para usar todas sus propiedades ngmodel,etc
import { FormsModule } from '@angular/forms';


// Servicios
import { ProyectService } from './service/proyect.service';
import { UploadService } from './service/upload.service';


// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { CreateProyectComponent } from './components/create-proyect/create-proyect.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { SliderComponent } from './components/slider/slider.component';

// Importar jquery
// import * as $ from 'jquery';
// Declaramos las variables para jQuery
// usar jquery en angular dentro de un componetes
declare var jQuery: any;
declare var $: any;

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProyectsComponent,
    CreateProyectComponent,
    ContactComponent,
    Error404Component,
    DetailsComponent,
    EditComponent,
    SliderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProyectService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
