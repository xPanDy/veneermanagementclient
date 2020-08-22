import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseLink =  environment.apiUrl+'items'


  constructor(private http: HttpClient) { }

  getItemList(): Observable<any> {
   console.log( this.http.get(`${this.baseLink}`));
    return this.http.get(`${this.baseLink}` );
  }
  // createMachine(machine: Object): Observable<Object> {
  //   console.log(this.http.post(`${this.baseUrl}`, machine))
  //   return this.http.post(`${this.baseUrl}`, machine);
  // }
  createItem(item:object): Observable<Object>{
    // this.http.post(`${this.baseLink}`,item)
    return this.http.post(`${this.baseLink}`,item);
  }

  deleteItem(id: number): Observable<any>  {
    return this.http.delete(`${this.baseLink}/${id}`, { responseType: 'text' });
  }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.baseLink}/${id}`);
  }

  updateItem(id: number, value: any):Observable<any> {
    return this.http.put(`${this.baseLink}/${id}`, value)
  }

}
