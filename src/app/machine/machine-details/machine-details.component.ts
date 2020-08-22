import { Component, OnInit , Input} from '@angular/core';
import {Machine} from "../Machine";
import {ActivatedRoute, Router} from "@angular/router";
import {MachineService} from "../services/machine.service";

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.css']
})
export class MachineDetailsComponent implements OnInit {

  id: number;
  machine : Machine;

  constructor(private route: ActivatedRoute, private router: Router,
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

  list(){
    this.router.navigate(['machines']);
  }
}
