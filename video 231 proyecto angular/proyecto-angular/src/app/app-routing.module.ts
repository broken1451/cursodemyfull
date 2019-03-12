import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { CreateProyectComponent } from './components/create-proyect/create-proyect.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'proyectos', component: ProyectsComponent },
  { path: 'crear-proyecto', component: CreateProyectComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

