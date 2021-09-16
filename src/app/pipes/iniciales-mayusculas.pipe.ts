import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inicialesMayusculas'
})
export class InicialesMayusculasPipe implements PipeTransform {

  transform(value: string, split: string = '') {

    let nombreCapitalizadoCompleto: string = '';

    nombreCapitalizadoCompleto = this.separarYCapitalizar(value, ' ');

    if(split != ''){
      nombreCapitalizadoCompleto = this.separarYCapitalizar(nombreCapitalizadoCompleto, split);
    }
   
    return nombreCapitalizadoCompleto;
  }

  separarYCapitalizar(value: string, spliter: string){

    let arrayStr: string[] = value.split(spliter);

    let nombreCapitalizado: Array<string> = [];

    for (let str of arrayStr) {
      nombreCapitalizado.push(this.capitalizarPrimeraLetra(str));
    }

    return nombreCapitalizado.join(spliter);
  }

  capitalizarPrimeraLetra(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
