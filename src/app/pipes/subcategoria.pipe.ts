import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subcategoria',
  pure: false
})
export class SubcategoriaPipe implements PipeTransform {

  transform(value: any, subclassfilter: string): any {
    if (!value || value.lenght === 0 || subclassfilter === 'all') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      console.log(item.subcategoria);
      if (item.subcategoria === subclassfilter) {
        resultArray.push(item);
      }
    }
      console.log(subclassfilter);
    return resultArray;
  }
}
