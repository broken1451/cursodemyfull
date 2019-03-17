import { Component, OnInit } from '@angular/core';

// Modelos
import { Proyect } from 'src/app/models/proyect';

// Servicio
import { ProyectService } from 'src/app/service/proyect.service';

// Variable global
import { Global } from 'src/app/service/global';




@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  public proyects: Array<Proyect>;
  public url: string;

  constructor(private proyectService: ProyectService) {
    this.url = Global.url;
   }

  ngOnInit() {
    this.getProyects();
  }

  getProyects() {
    this.proyectService.getProyects().subscribe((res: any) => {
      if (res.projects) {
        this.proyects = res.projects;
      }
      console.log('La res tiene como valor: ', res);
      console.log('La res.projects tiene como valor: ', res.projects);
    }, (err: any) => { console.log(err); } );
  }




}
