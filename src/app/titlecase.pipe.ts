import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());;
  }

}
