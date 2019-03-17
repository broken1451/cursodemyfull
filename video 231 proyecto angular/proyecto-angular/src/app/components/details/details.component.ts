import { Component, OnInit } from '@angular/core';

// Modelos
import { Proyect } from 'src/app/models/proyect';

// Servicio
import { ProyectService } from 'src/app/service/proyect.service';

// Variable global
import { Global } from 'src/app/service/global';

// router y Parametros por la url
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public url: string;
  public proyect: Proyect;
  public confirm: boolean;

  constructor(private proyectService: ProyectService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.url = Global.url;
    this.confirm = false;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((parametrosUrl) => {
      const id = parametrosUrl.id;

      this.getProyect(id);

      console.log('Los parametros de la url son parametrosUrl: ', parametrosUrl);
    });
  }


  getProyect(id: any): any {
    this.proyectService.getProyect(id).subscribe(res => {
      this.proyect = res.project;
      console.log('La res tiene como valor:', res);
      console.log('La this.proyect tiene como valor:', this.proyect);
    }, (err) => {console.log(err); });
  }


  deleteProyect(id: any) {
    this.proyectService.deleteProyect(id).subscribe( (res: any) => {

      if (res.project) {
        this.router.navigate(['/proyectos']);
      }

      console.log('La res tiene como valor:', res);
    }, (err) => {console.log(err); });
  }

  setConfirm(confirm: any) {
    this.confirm = confirm;
    console.log('El confirm tiene como valor: ', confirm);
  }

}
