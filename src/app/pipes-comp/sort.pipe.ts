import { Pipe, PipeTransform } from '@angular/core';
export class Server {

  instanceType: string;
  name: string;
  status: string;
  started: Date;

}
@Pipe({
  name: 'sort',
  // pure: false
  //remove the above if you need the sort to run even after the data on page changes
  //like a new server is added for example.
})
export class SortPipe implements PipeTransform {

  transform(value: Server[], sortDir: string): Server[] {
    debugger;
    if (value == null) {
      return value;
    }
    else {
      if (sortDir === 'asc') {
        value = value.sort(function (a, b) {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase

          // sort in an ascending order
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        return value;
      }
      else {
        value = value.sort(function (a, b) {
          const nameA = a.name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        return value;
      }
    }
  }

}
