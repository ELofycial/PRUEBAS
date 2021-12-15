import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationPipesModule } from '../pipes/application-pipes.module';

import { TiendaComponent } from './tienda/tienda.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CelularComponent } from './celular/celular.component';




@NgModule({
  declarations: [
    TiendaComponent,
    HomeComponent,
    DashboardComponent,
    CelularComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ApplicationPipesModule,
  ]
})
export class PagesModule { }
