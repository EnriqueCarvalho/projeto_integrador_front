// cpf.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
    transform(value: string|number,
              ocultarAlgunsValores: boolean = false): string {
        let valorFormatado = value + '';

        valorFormatado = valorFormatado
           
        
            valorFormatado =valorFormatado.substr(0, 2) +'*.***.' + valorFormatado.substr(8, 3)+'-**' ;
        

        return valorFormatado;
    }
}