import { Injectable } from '@angular/core';
import {User} from "../user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UsersvcService {

  private baseLink =  environment.apiUrl+'users'
  private userDetailsLink =  environment.apiUrl+'userdetails'
  constructor(private http: HttpClient) { }

  getUsrList(): Observable<any> {
    return this.http.get(`${this.baseLink}` );
  }

  deleteUsr(id: number): Observable<any>  {
    return this.http.delete(`${this.baseLink}/${id}`, { responseType: 'text' });
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.userDetailsLink}/${id}`);
  }

  updateUser(id: number, value: any):Observable<Object> {
    return this.http.put(`${this.baseLink}/${id}`, value);
  }
}
