import { Component, OnInit } from '@angular/core';
import { Machine} from "../Machine";
import { ActivatedRoute, Router } from '@angular/router';
import { MachineService} from "../services/machine.service";

@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.component.html',
  styleUrls: ['./update-machine.component.css']
})
export class UpdateMachineComponent implements OnInit {

  id: number;
  machine: Machine;
  submitted: any;


  constructor(private route: ActivatedRoute,private router: Router,
              private machineService: MachineService) { }

  ngOnInit() {
    this.machine = new Machine();

    this.id = this.route.snapshot.params['id'];

    this.machineService.getMachine(this.id)
      .subscribe(data => {
        console.log(data)
        this.machine = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.machineService.updateMachine(this.id, this.machine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.machine = new Machine();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/machines']);
  }
}
