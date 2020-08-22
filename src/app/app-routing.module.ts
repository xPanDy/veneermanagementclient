import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/component/registration.component";
import {LoginsuccessComponent} from "./loginsuccess/loginsuccess.component";
import {MachineDetailsComponent} from "./machine/machine-details/machine-details.component";
import {CreateMachineComponent} from "./machine/create-machine/create-machine.component";
import {MachineListComponent} from "./machine/machine-list/machine-list.component";
import {UpdateMachineComponent} from "./machine/update-machine/update-machine.component";
import {UserListComponent} from "./user/components/user-list/user-list.component";
import {UpdateUserComponent} from "./user/components/update-user/update-user.component";
import {UserDetailsComponent} from "./user/components/user-details/user-details.component";
import {ItemListComponent} from "./item/components/item-list/item-list.component";
import {ItemDetalsComponent} from "./item/components/item-detals/item-detals.component";
import {UpdateItemComponent} from "./item/components/update-item/update-item.component";
import {CreateItemComponent} from "./item/components/create-item/create-item.component";
import {CreatePackComponent} from "./pack/components/create-pack/create-pack.component";
import {PackListComponent} from "./pack/components/pack-list/pack-list.component";


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'registeruser', component:RegistrationComponent},
  {path:'loginsuccess', component:LoginsuccessComponent},
  // { path: 'machines', redirectTo: 'machines' },
  { path: 'machines', component: MachineListComponent },
  { path: 'add', component: CreateMachineComponent },

  { path: 'update/:id', component: UpdateMachineComponent },
  { path: 'details/:id', component: MachineDetailsComponent },

  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserListComponent },
  { path: 'userdetails/:id', component: UserDetailsComponent },

  { path: 'items', component: ItemListComponent },
  { path: 'itemEdit/:id', component: UpdateItemComponent },
  { path: 'items/:id', component: ItemListComponent },
  { path: 'itemDetails/:id', component: ItemDetalsComponent },
  { path: 'addItems', component: CreateItemComponent },




  { path: 'createpack', component: CreatePackComponent },
  { path: 'packs', component: PackListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
