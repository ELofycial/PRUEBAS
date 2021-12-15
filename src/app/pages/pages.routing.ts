import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularComponent } from './celular/celular.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
    {
        path:'dashboard',
        // component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'} },
          { path: 'tienda', component: TiendaComponent, data: { titulo: 'tienda'}  },
          { path: 'celular', component: CelularComponent, data: { titulo: 'celular'}  },
          // { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs Observables'}  },
          // { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica'}  },
          // { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes'}  },
          // { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}  },
          // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
      }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
