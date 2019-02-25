import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

  transform(value: any, value2: any): any {
    // dato | calculadora: otro dato
    // param1              param2
    const operaciones = `
    Suma: ${value + value2} -
    Resta: ${value - value2} -
    Producto: ${value * value2} -
    Division:${value / value2}
    `;

    console.log('El valor de value en el pipe calculadora es: ', value);
    console.log('El valor de value2 en el pipe calculadora es:', value2);
    return operaciones;

  }

}
