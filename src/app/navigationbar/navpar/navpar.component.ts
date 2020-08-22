import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";

@Component({

 // selector: 'sd-navbar',
 // templateUrl: 'navbar.component.html',
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.css']
})
export class NavparComponent implements OnInit {

  constructor( public navigation: NavbarService) { }

  ngOnInit(): void {
  }

}
