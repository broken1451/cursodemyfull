import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Declaramos las variables para jQuery
// usar jquery en angular dentro de un componetes
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  @Input() anchura: number; // recibe info del padre
  @Input() etiqueta: boolean;
// tslint:disable-next-line:no-input-rename
  // @Input('etiqueta') captions: boolean;

/////////////////////////////////////////////////////////////////////////
  // Output nos permite compartir informacion de un componente a otro, desde el componente hijo al padre

public autor: any;

// @Output() propiedad a devolver con un evento = new con este objeto se puede generar nuevos eventos;
@Output() getAutor = new EventEmitter();


constructor() {
  this.autor = {
    nombre: 'Adrian Bravo',
    apellido: 'Viloria',
    banda: 'BFMV'
  };
}

ngOnInit() {

    $('#logo').click(  (e) => {
      e.preventDefault();
      $('header').css('background', 'green')
                 .css('height', '50px');
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      // captions: false,
      captions: this.etiqueta,
      // slideWidth: 1200
      slideWidth: this.anchura
    });

   // Lanzar el evento
    this.getAutor.emit(this.autor);

 }


 lanzarEventoOutput(event: any) {
   // this.getAutor.emitir los o un datos(se puede pasar un json o una propiedad como tal {}); el emit es lo que se va a recibir en el otro componente
  this.getAutor.emit(this.autor);
  console.log('El evento de evento click de lanzarEventoOutput es: ', event);
 }


}
