import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent {
 public titulo: string;
 public listado: string;

  constructor() {

    this.titulo = 'Componente de video juego';
    this.listado = 'Los mejores juegos de la historia';

    console.log(' El constructor es el primer metodo q se ejecuta al cargar un objeto Se ha cargado el compoonente videojuegoComponent.ts asi >v ');
  }

}
