import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../user/user";
import {RegistrationService} from "../service/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';
  constructor(private _service : RegistrationService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response has a value");
        this._router.navigate(['/login']);
        this.msg="registration was made"
      } ,
      error => {
        console.log("exception occured");

        this.msg = error.error;
      })
  }

  gotologin(){
    this._router.navigate(["/login"]);
    console.log("login form")
  }
}
