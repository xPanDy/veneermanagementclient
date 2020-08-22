import { Component, OnInit } from '@angular/core';

import {Pack} from "../../Pack";
import {HttpClient} from "@angular/common/http";
import {Item} from "../../../item/Item";
import {PackService} from "../../service/pack.service";
import {Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {Machine} from "../../../machine/Machine";
import {MachineService} from "../../../machine/services/machine.service";
import {UsersvcService} from "../../../user/service/usersvc.service";
import {User} from "../../../user/user";

@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrls: ['./create-pack.component.css']
})
export class CreatePackComponent implements OnInit {
  submitted: any;

  pack: Pack = new Pack();
  user: User = new User();
  machine: Machine = new Machine();

  items:Object=[];
  machines: Object= [];
  users: Object= [];



  constructor(
    private packService:PackService,
    private route: Router,

  ) { }

  ngOnInit(): void {
    this.getItems();
    this.getMachines();
    this.getUsers();
  }

  getUsers(): any {
    this.packService.getAllUsers().subscribe(data=>{this.users = data}, error => {throwError(error);})

  }

  getMachines(): any {
    this.packService.getAllMachines().subscribe(data=>{this.machines = data}, error => {throwError(error);})
   // this.packService.getAllItems().subscribe(data=>{this.machines = data}, error => {throwError(error);})

  }
  getItems(): any
  {

    this.packService.getAllItems().subscribe(data=>{this.items = data}, error => {throwError(error);})
    //return this.http.get(`${this.baseUrl}`);
  }

  add( pack:Object)
  {
    this.packService
      .createPack(this.pack)
      .subscribe
      (
        data =>
        {
          console.log(data);

        },
        error => console.log(error)
      );
    console.log(this.pack)
  }


  onSubmit(){

  }

  back(){
    this.route.navigate(["/machines"]);
  }
}




