import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../user";
import {UsersvcService} from "../../service/usersvc.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User>

  constructor(
    private usrSrvc:UsersvcService,
    private router: Router
  )
  {

  }

  ngOnInit() {
    this.reload();
  }

  reload(){
    this.users = this.usrSrvc.getUsrList();
  }

  deleteUsr(id:number){
    this.usrSrvc.deleteUsr(id).subscribe(
      data=>{
        console.log(data);
        this.reload();
      },
      error => console.log(error));

  }
  userDetails(id: number){
    this.router.navigate(['userdetails', id]);
   }

}
