import { Component, OnInit } from '@angular/core';

// parametros por url
import { Router, ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nombre: string;
  public followers: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((parametrosUrl: Params) => {
      this.nombre = parametrosUrl.nombre;

      this.followers = + parametrosUrl.followers;
      // this.nombre = parametrosUrl['nombre'];

      if (this.nombre === 'ninguno') {
        this.router.navigate(['/home']);
      }

      console.log(parametrosUrl);
      console.log(this.nombre);
      console.log(this.followers);
      // console.log(typeof +(el mas transforma a numero) parametrosUrl.followers);
      console.log(typeof + parametrosUrl.followers);
    });
  }

  redirijir() {
    this.router.navigate(['/zapatilla']);
  }

}
