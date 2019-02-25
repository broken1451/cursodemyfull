import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// archivo de rutas
// import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app.routing';


// importa modulos http para hacer peticiones
import { HttpClientModule } from '@angular/common/http';


// Componentes
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';




@NgModule({ // configura los modulos
  declarations: [// cargar los componentes,diretivas y pipes
    AppComponent,
    VideojuegosComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [ // para importar/cargar modulos de angular o externos o creados nosotros
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // routing
    HttpClientModule
  ],
  // providers sirve para cargar servicios
  providers: [
    // appRoutingProviders
  ],
  bootstrap: [AppComponent] // Modulo principal que se va a cargar el que inicia la app
})
export class AppModule { }
