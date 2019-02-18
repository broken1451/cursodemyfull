// // importar modulos del router de angular
// import {ModuleWithProviders} from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';


// // importar los componentes
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';


// array de rutas
// const appRoutes: Routes = [
// { path: '', component: HomeComponent },
// { path: 'zapatilla', component: ZapatillasComponent },
// { path: 'videojuego', component: VideojuegosComponent },
// { path: 'cursos', component: CursosComponent },
// { path: '**', component: HomeComponent }
// ];

// // exportar el modulo del routing
// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'zapatilla', component: ZapatillasComponent },
    { path: 'videojuego', component: VideojuegosComponent },
    // { path: 'cursos/:parametros', component: CursosComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'externo', component: ExternoComponent},
    { path: 'cursos/:nombre/:followers', component: CursosComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
