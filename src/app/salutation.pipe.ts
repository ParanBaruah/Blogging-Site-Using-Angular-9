import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(args=="male" || args=="undefined")
      return "Mr. " + value;
    else
      return "Mrs. " + value;
  }

}
