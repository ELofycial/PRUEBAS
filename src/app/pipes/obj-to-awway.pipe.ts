import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToAwway'
})
export class ObjToAwwayPipe implements PipeTransform {

  transform(object:any =[]):any{
    return Object.values(object);
  } 

}
