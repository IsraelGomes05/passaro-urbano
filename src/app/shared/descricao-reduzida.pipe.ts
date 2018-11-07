import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.toString().length > args[0]) {
      return value.toString().substr(0 , args[0]) + '...';
    }

    return value;
  }

}
