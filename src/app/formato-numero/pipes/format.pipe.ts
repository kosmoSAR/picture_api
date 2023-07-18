import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: number, format: number): string {

    const opcionesFormato: Intl.NumberFormatOptions = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    let numeroFormateado = value.toLocaleString(undefined,opcionesFormato);

    if (format == 3) {
      numeroFormateado = numeroFormateado.replace(/,/g, '.');
    }

    if (format == 4) {
      numeroFormateado = numeroFormateado.replace(/\./g, ',');
    }

    return numeroFormateado;
  }

}
