import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';


@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = 'los zapatos del componente Zapatilla son: ';
    public zapatillas: Array<Zapatilla>;
    // public marcas: Array<string>;
    public marcas: string[];
    public color: string;
    public miMarca: string;

    constructor(private zapatillaService: ZapatillaService) {

      this.miMarca = 'fila';
      this.color = 'yellow';

      this.marcas = new Array();

      // this.zapatillas = [
      //   new Zapatilla('Rebook Clasic', 'Rebook', 80, 'red', false),
      //   new Zapatilla('Nike ', 'nike', 40, 'white', true),
      //   new Zapatilla('Adio', 'Adio', 120, 'black', false),
      //   new Zapatilla('Adio Clasic', 'Adio', 120, 'black', true),
      //   new Zapatilla('dasd', 'dic', 50, 'green', false),
      //   new Zapatilla('Dicichu', 'DC', 50, 'green', true)
      // ];

      console.log(' El Constructor es el primer metodo que se ejecuta al cargar un objeto se ha cargado el compoonente zapatillas.ts asi :v ');
      console.log(this.zapatillas);
    }

    ngOnInit() {
      this.zapatillas = this.zapatillaService.getZapatilla();
      console.log(this.zapatillas);
      this.getMarcas();
      alert(this.zapatillaService.getTexto());
    }


  getMarcas() {
  this.zapatillas.map((zapatillla, i) => {
     if (this.marcas.indexOf(zapatillla.marca) < 0) {
      // this.marcas.indexOf(zapatillla.marca) < 0

      this.marcas.push(zapatillla.marca);
     }
     console.log(i);
  });
  console.log(this.marcas);


/* this.zapatillas.forEach((zapatillla, i) => {

      if (this.marcas.indexOf(zapatillla.marca) <= 0) {
        this.marcas.push(zapatillla.marca);
      }
      console.log(i);
    });
  console.log(this.marcas);
*/
  }

  verMarca() {
    alert(this.miMarca);
  }

  addMarca() {
    this.marcas.push(this.miMarca);
  }

  deleteMarca() {
    this.marcas.pop();
  }

  borrarMarca(i) {
    // delete this.marcas[i];
    this.marcas.splice(i, 1);
  }

  onBlur() {
    console.log('On blue ejecutado has salido del input');
  }

  mostrarPalabra() {
    alert(this.miMarca);
  }

}
