import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(item : any, tva: boolean = false) {
    if(tva){
      return item.totalTTC();
    }
    return item.totalHT();
  }
}
