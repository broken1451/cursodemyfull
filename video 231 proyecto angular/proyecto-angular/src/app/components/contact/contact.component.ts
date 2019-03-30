import { Component, OnInit, ViewChild } from '@angular/core';


// Declaramos las variables para jQuery
// usar jquery en angular dentro de un componetes
declare var jQuery: any;
declare var $: any;



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  // @ViewChild('#se recoge la variable') crearPropiedad: any;
  @ViewChild('textos') textos: any;

  constructor() {
    this.captions = true;
  }

  ngOnInit() {

  // usar jquery en angular dentro de un componetes
    // $('header').css('background', 'green');
    // $('#logo').click(  (e) => {
    //   e.preventDefault();
    //   $('header').css('background', 'green')
    //              .css('height', '50px');
    // });

    // $('.galeria').bxSlider({
    //   mode: 'fade',
    //   captions: false,
    //   slideWidth: 1200
    // });

  // tslint:disable-next-line:prefer-const
  let opcionClasica = document.querySelector('#texto').innerHTML;
  console.log('La opcion clasica es let opcionClasica = document.querySelector(#texto).innerHTML; es: ', opcionClasica);
  console.log('La propiedad de viewChild es: ', this.textos);
  console.log('La propiedad de viewChild es: ', this.textos.nativeElement.textContent);

  }

  // Esta seccion es con los inputs y outputs
  cargarSlider() {
    this.anchuraToSlider = this.widthSlider;
  }

  resetSlider() {
   this.anchuraToSlider = null;
  }

  getAutores(event: any) {
    this.autor = event;
    console.log('El evento de output de la etiqueta hija hacia el padre (getAutor)=getAutores($event) es: ', event);
  }

}
