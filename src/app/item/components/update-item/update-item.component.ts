import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {UsersvcService} from "../../../user/service/usersvc.service";
import {Item} from "../../Item";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  id: number;
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemSvc: ItemService
  ) { }

  ngOnInit(): void {
    this.item = new Item();
    this.id = this.route.snapshot.params['id'];

    this.itemSvc.getItem(this.id).subscribe(data=> {
      console.log(data)
      this.item = data;
    }, error=> console.log(error));
  }

  updateItem() {
    this.itemSvc.updateItem(this.id, this.item).subscribe(data=> console.log(data),
      error=>console.log(error));
    this.item = new Item();
    this.gotoList();
  }
  onSubmit() {
    this.updateItem();
  }

  gotoList() {
    this.router.navigate(['/items']);
  }

}
