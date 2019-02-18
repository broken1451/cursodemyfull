import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()

export class ZapatillaService {
public zapatillas: Array<Zapatilla>;

constructor() {
    this.zapatillas = [
        new Zapatilla('Rebook Clasic', 'Rebook', 80, 'red', false),
        new Zapatilla('Nike ', 'nike', 40, 'white', true),
        new Zapatilla('Adio', 'Adio', 120, 'black', false),
        new Zapatilla('Adio Clasic', 'Adio', 120, 'black', true),
        new Zapatilla('dasd', 'dic', 50, 'green', false),
        new Zapatilla('Dicichu', 'DC', 50, 'green', true)
      ];
}

// getZapatilla(): Array<Zapatilla> {
getZapatilla(): Array<Zapatilla> {
return this.zapatillas;
}

getTexto() {
    return 'Hola mundo desde un servicio :V';
}


}
