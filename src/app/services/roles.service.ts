import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://api.leptus.pe/api/roles';
const API_CODE = 'iT3BnOENtV30pxRDadZ99e43wbDL4NA9'; 

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) {}
  
  getRoles(): Observable<any[]> {
		return this.http.get<any[]>(BASE_URL + '/lista/' + API_CODE);
	} 
}
