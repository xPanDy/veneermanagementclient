import { Component, OnInit } from '@angular/core';
import {MachineService} from "../../../machine/services/machine.service";
import {Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
import {Observable, throwError} from "rxjs";
import {Machine} from "../../../machine/Machine";
import {Item} from "../../Item";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(
    private itemService:ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.reloadData();
  }
  reloadData(){
    this.itemService.getItemList().subscribe(data=> {
      this.items = data;
    }, error => {throwError(error); })
  }

  deleteItem( id: number) {
    this.itemService.deleteItem(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  // editItem(  ) {
  //   this.itemService.updateItem(this.id, this.item)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //         this.gotoList();
  //       },
  //       error => console.log(error));
  // }

  itemDetails(id: number){
    this.router.navigate(['itemDetails', id]);
  }

  editItem( id:number){
     this.router.navigate(['itemEdit', id]);
  }

  gotoList() {
    this.router.navigate(['items']);
    this.itemService.getItemList();
  }
}
