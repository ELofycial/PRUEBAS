import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjToAwwayPipe } from './obj-to-awway.pipe';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ObjToAwwayPipe
  ],
  exports: [
    ObjToAwwayPipe
  ]  
})
export class ApplicationPipesModule { }
