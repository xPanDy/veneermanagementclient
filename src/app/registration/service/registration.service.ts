import { Injectable } from '@angular/core';
import {User} from "../../user/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {JwtClientService} from "../../security/jwt-client.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http: HttpClient, service: JwtClientService) { }

  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>(environment.apiUrl+ 'login', user)
  }
  public registerUserFromRemote(user: User):Observable<any>{



    return this._http.post<any>(environment.apiUrl+ 'registeruser', user)
  }

  handleError(error: Response){

  }
}
