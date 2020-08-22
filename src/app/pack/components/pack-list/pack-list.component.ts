import { Component, OnInit } from '@angular/core';
import {Pack} from "../../Pack";
import {Observable, throwError} from "rxjs";

import {PackService} from "../../service/pack.service";
import {ItemService} from "../../../item/service/item.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent implements OnInit {

  // packs:  Observable<Pack[]>;
   packs:  Array<Pack> = [] ;

  constructor(
    private packService: PackService,


  ) { }

  ngOnInit(): void {
    this.reload();
  }
  reload(){
    // this.packs = this.packService.getAllPacks();
    this.packService.getAllPacks().subscribe(data=>{this.packs = data}, error => {throwError(error);})
    console.log(this.packService.getAllPacks())
  }



  getAlLPacks():any{
    this.packService.getAllPacks().subscribe(
      data=>{
        this.packs = data;

      }, error => {throwError(error);}
    )
  }

  deletePack(id: number){
    this.packService.deletePack(id)
      .subscribe(
        data => {
          console.log(data);
          this.getAlLPacks();
        },
        error => console.log(error));
  }

  print(id: number) {

  }
}
