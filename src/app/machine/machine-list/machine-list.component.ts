import { Component, OnInit } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {MachineDetailsComponent} from "../machine-details/machine-details.component";
import { Machine} from "../Machine";
import { Router} from "@angular/router";
import {MachineService} from "../services/machine.service";
import {LoginService} from "../../login/service/login.service";

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {
  machines: Observable<Machine[]>;
 public isMachines:true;
  constructor(private machineService:MachineService, private router: Router) { }

  ngOnInit(): void {

    this.reloadData();

  }

  goToLink(machineEl:Machine){
    this.router.navigate(['createpack', machineEl]);
  }

  reloadData(){
      this.machineService.getMachineList().subscribe(data=>{
      this.machines = data;
    }, error => {throwError(error);

    })
   }

  deleteMachine( id: number) {
    this.machineService.deleteMachine(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  machineDetails(id: number){
    this.router.navigate(['details', id]);
  }


}
