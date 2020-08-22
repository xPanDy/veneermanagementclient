import { Component, OnInit } from '@angular/core';
import {MachineService} from "../../../machine/services/machine.service";
import {Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
import {Item} from "../../Item";
import {Machine} from "../../../machine/Machine";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  item: Item = new Item();
  isItemSubmitted= false;
  constructor(private itemSvc: ItemService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newItem(): void {
    this.isItemSubmitted = false;
    this.item = new Item()
  }

  save(){
    this.itemSvc.createItem(this.item)
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new Item();
    this.gotoList();
  }

  onSubmit(){
    this.isItemSubmitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/items'])
  }
}
