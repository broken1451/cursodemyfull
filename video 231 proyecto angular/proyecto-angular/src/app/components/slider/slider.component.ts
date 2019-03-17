import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

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



  }

}
