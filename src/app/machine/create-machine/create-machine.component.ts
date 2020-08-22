import { Component, OnInit } from '@angular/core';
import { Machine} from "../Machine";
import { MachineService} from "../services/machine.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-create-machine',
  templateUrl: './create-machine.component.html',
  styleUrls: ['./create-machine.component.css']
})
export class CreateMachineComponent implements OnInit {

  machine: Machine = new Machine();
  isMachineSubmitted = false;

  constructor(private machineService: MachineService,
              private router: Router) {  }

  ngOnInit(): void {
  }

  newMachine(): void {
    this.isMachineSubmitted = false;
    this.machine = new Machine()
  }

  save(){
    this.machineService.createMachine(this.machine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.machine = new Machine();
    this.gotoList();
  }

  onSubmit(){
    this.isMachineSubmitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/machines'])
  }

}
