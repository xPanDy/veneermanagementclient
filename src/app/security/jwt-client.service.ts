import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) {

  }

  public generateToken(request){
    return this.http.post(environment.apiUrl +"login", request,{responseType: "text" as "json"});
  }

  public welcome(token){
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set(environment.apiUrl + "login", tokenStr)
    return this.http.get(environment.apiUrl, token  )
  }
}
