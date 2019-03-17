import { Component, OnInit } from '@angular/core';


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
  public anchuraToSlider: number;
  public captions: boolean;

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


  }

  cargarSlider() {
    this.anchuraToSlider = this.widthSlider;
  }

 resetSlider() {
   this.anchuraToSlider = null;
 }

}
