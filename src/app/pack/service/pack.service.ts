import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pack} from "../Pack";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class PackService {
  private baseLink =          environment.apiUrl+'packs';
  private itemsLink =          environment.apiUrl+'items';
  private usersLink =          environment.apiUrl+'users';
  private machinesLink =       environment.apiUrl+'machines';

  constructor( private http: HttpClient) { }

  getAllPacks() :Observable<any>{
    return this.http.get(`${this.baseLink}`);
  }

  getAllItems() {
    return this.http.get(`${this.itemsLink}`);

  }

  getAllUsers() {
    return this.http.get(`${this.usersLink}`);

  }

  getAllMachines() {
    return this.http.get(`${this.machinesLink}`);

  }

  deletePack(id:number ) :Observable<any>{
    return this.http.delete(`${this.baseLink}/${id}`);

  }
  getPackById(id:number):Observable<any>{
    return this.http.get(`${this.baseLink}/${id}`);
  }

  editPack(pack: Object, id):Observable<any>{
    return this.http.put(`${this.baseLink}/${id}`, pack);
  }

  createPack(pack: Object): Observable<Object> {
    console.log(this.http.post(`${this.baseLink}`, pack))
    return this.http.post(`${this.baseLink}`, pack);
  }

}
