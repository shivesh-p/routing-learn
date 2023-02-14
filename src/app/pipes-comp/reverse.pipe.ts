import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    if (value === "" || value == null || typeof value == 'undefined') {
      return value;
    }
    else {
      var revArr = value.split('');
      revArr = revArr.reverse();
      return revArr.join('');
    }
  }

}
