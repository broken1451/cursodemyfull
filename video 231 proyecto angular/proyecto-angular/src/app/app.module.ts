import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Http para hacer peticiones
import { HttpClientModule } from '@angular/common/http';

// Modulos de formularios para usar todas sus propiedades ngmodel,etc
import { FormsModule } from '@angular/forms';



// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { CreateProyectComponent } from './components/create-proyect/create-proyect.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProyectsComponent,
    CreateProyectComponent,
    ContactComponent,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
