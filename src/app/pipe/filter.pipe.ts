import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.id.toString().toLowerCase().includes(args)) || (val.first_name.toLocaleLowerCase().includes(args))
      || (val.last_name.toLocaleLowerCase().includes(args))|| (val.email.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
