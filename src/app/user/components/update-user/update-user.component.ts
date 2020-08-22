import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersvcService} from "../../service/usersvc.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usrSvc: UsersvcService
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.usrSvc.getUser(this.id).subscribe(data=> {
      console.log(data)
      this.user = data;
    }, error=> console.log(error));
  }

  updateUser() {
    this.usrSvc.updateUser(this.id, this.user).subscribe(data=> console.log(data),
      error=>console.log(error));
    this.user = new User();
    this.gotoList();
  }
  onSubmit() {
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}
