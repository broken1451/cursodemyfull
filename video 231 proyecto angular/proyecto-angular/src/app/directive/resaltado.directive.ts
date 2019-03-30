import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit {

  constructor(public elementRef: ElementRef) {

    // tslint:disable-next-line:prefer-const
    // let elemento = elementRef.nativeElement;
    // elemento.style.background = 'blue';
    // elemento.style.padding = '20px';
    // elemento.style.marginTop = '15px';
    // elemento.style.color = 'white';
    // console.log('El elementRef tiene como valor', elemento);
  }

  ngOnInit() {
  // tslint:disable-next-line:prefer-const
  let elemento = this.elementRef.nativeElement;
  elemento.style.background = 'blue';
  elemento.style.padding = '20px';
  elemento.style.marginTop = '15px';
  elemento.style.color = 'white';
  // elemento.innerHTML.toUpperCase();
  elemento.innerText =  elemento.innerText.toUpperCase().replace('CONTACTO', '|||||||');
  console.log('El this.elementRef tiene como valor', this.elementRef);
  console.log('El elementRef tiene como valor', elemento);
  console.log('El elemento.innerHTML tiene como valor', elemento.innerHTML);
  }


}
