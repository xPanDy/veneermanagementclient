import { Component, OnInit } from '@angular/core';
import {Machine} from "../../../machine/Machine";
import {ActivatedRoute, Router} from "@angular/router";
import {MachineService} from "../../../machine/services/machine.service";
import {Item} from "../../Item";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-item-detals',
  templateUrl: './item-detals.component.html',
  styleUrls: ['./item-detals.component.css']
})
export class ItemDetalsComponent implements OnInit {
  id: number;
  item : Item;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) { }

  ngOnInit() {
    this.item = new Item();

    this.id = this.route.snapshot.params['id'];

    this.itemService.getItem(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
  }

  listItems(){
    this.router.navigate(['items']);
  }

}
