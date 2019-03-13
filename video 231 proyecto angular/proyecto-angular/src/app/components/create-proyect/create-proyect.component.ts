import { Component, OnInit } from '@angular/core';

// Modelo
import { Proyect } from 'src/app/models/proyect';

// Servicio
import { ProyectService } from '../../service/proyect.service';




@Component({
  selector: 'app-create-proyect',
  templateUrl: './create-proyect.component.html',
  styleUrls: ['./create-proyect.component.css']
})
export class CreateProyectComponent implements OnInit {

  public title: string;
  public proyect: Proyect;

  constructor( private proyectService: ProyectService) {
    this.title = 'Crear proyecto';
    this.proyect = new Proyect('', '', '', '', 2019 , '', '');
   }

  ngOnInit() {
  }


  onSubmit(proyectForm: any) {
    console.log('El valor de proyectForm es: ', proyectForm);
    console.log('El valor de this.proyect es: ', this.proyect);
  }


}
