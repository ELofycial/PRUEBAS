import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class PagesModule { }
