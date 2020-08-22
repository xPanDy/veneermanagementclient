import { Component } from '@angular/core';
import {LoginService} from "./login/service/login.service";
import {Subscription} from "rxjs";
import {NavbarService} from "./navigationbar/navbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  private isUserLoggedIn= false;


  constructor(public nav: NavbarService ) {

  }

  ngOnInit(): void {
  this.nav.hide();


  }


}
