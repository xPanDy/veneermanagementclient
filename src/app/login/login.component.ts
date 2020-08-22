import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import {RegistrationService} from "../registration/service/registration.service";
import {User} from "../user/user";
import {Route, Router} from "@angular/router";
import {LoginService} from "./service/login.service";
import {AppComponent} from "../app.component";
import {NavbarService} from "../navigationbar/navbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';
  constructor( private nav: NavbarService,
              private appComponent:AppComponent,
              private _service: RegistrationService,
              private _route : Router) { }

  ngOnInit(): void {

  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=> {
        console.log("got the response");
        this._route.navigate(['/machines']);
        this.nav.show()
      },
      error => { console.log("exception occured"+ this.user.code + " |" + this.user.password);
      this.msg ="bad credentials, please enter valid code and password";

      }
    );


  }

  gotoregistration(){
    this._route.navigate(["/registeruser"]);
    console.log("registration form")
  }
}
