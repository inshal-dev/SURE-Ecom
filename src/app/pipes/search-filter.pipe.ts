import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, key:any){
    if(key) {
      return value.filter((data:any)=> data.productName.toLocaleLowerCase().includes(key.toLocaleLowerCase()))
    }else{
      return value
    }
  }

}
