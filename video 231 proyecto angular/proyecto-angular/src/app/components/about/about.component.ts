import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitulo: string;
  public email: string;

  constructor() {

    this.title = 'Adrian Bravo';
    this.subtitulo = 'Desarrollador Web camino a ser Formador';
    this.email = 'adrianbravo145@gmail.com';

   }

  ngOnInit() {
  }

}
