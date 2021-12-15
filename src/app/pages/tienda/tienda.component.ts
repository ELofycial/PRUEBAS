import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  RolesSoftware?: any;

  constructor(private rolService: RolesService) { }

  ngOnInit(): void {
  this.getServicesList();  
  }

  getServicesList(): void {
  this.rolService.getRoles()
      .subscribe(
        data => {
          this.RolesSoftware =  data;
          this.RolesSoftware = this.RolesSoftware.data;
          console.log(this.RolesSoftware);
        },
        error => {
          console.log(error);
        }); 
  }
}
