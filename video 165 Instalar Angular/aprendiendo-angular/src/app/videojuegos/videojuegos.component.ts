import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuegos.component.html'
})
export class VideojuegosComponent implements OnInit, DoCheck, OnDestroy {
 public titulo: string;
 public listado: string;

  constructor() {

    this.titulo = 'Componente de video juego';
    this.listado = 'Los mejores Juegos de la historia';

    console.log(' El Constructor es el primer metodo que se ejecuta al cargar un objeto se ha cargado el compoonente videojuegoComponent.ts asi :v ');
  }


  ngOnInit() {
    // console.log('onInit Ejecutado, Este metodo se ejecuta cuando el componente esta cargado');
  }

  ngDoCheck() {
    // console.log('DoCheck Ejecutado, Este metodo se ejecuta cuando cada vez q se ejecuta un cambio en el componente o en la app de angular y se ejecuta frecuentemente cada vez que se ejecuta esto :v');
  }

  ngOnDestroy() {
    // console.log('OnDestroy Ejecutado, Este metodo se ejecuta cuando queremos ejecutar algo antes de eliminar la instancia de un componente');
  }

  cambiarTitulo() {
    this.titulo = 'Nuevo titulo del componente';
  }

  ponerTitulo() {
    this.titulo = 'Componente de video juego';
  }


}
