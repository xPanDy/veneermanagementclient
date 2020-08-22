import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment.prod";



@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private baseUrl = environment.apiUrl +  'machines'

  constructor(private http: HttpClient) { }

  getMachine(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMachine(machine: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseUrl}`, machine))
    return this.http.post(`${this.baseUrl}`, machine);
  }

  updateMachine(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMachine(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMachineList(): Observable<any> {

    return this.http.get( environment.apiUrl+'machines');
  }
}
