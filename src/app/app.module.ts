import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/component/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { CreateMachineComponent } from './machine/create-machine/create-machine.component';
import { MachineListComponent } from './machine/machine-list/machine-list.component';
import { MachineDetailsComponent } from './machine/machine-details/machine-details.component';
import { UpdateMachineComponent } from './machine/update-machine/update-machine.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserDetailsComponent } from './user/components/user-details/user-details.component';
import { UpdateUserComponent } from './user/components/update-user/update-user.component';
import { ItemListComponent } from './item/components/item-list/item-list.component';
 import { ItemDetalsComponent } from './item/components/item-detals/item-detals.component';
import { CreateItemComponent } from './item/components/create-item/create-item.component';
import { UpdateItemComponent } from './item/components/update-item/update-item.component';
import { CreatePackComponent } from './pack/components/create-pack/create-pack.component';
import { PackListComponent } from './pack/components/pack-list/pack-list.component';
import { NavparComponent } from './navigationbar/navpar/navpar.component';
import { SecurityComponent } from './security/security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    CreateMachineComponent,
    MachineListComponent,
    MachineDetailsComponent,
    UpdateMachineComponent,
    UserListComponent,
    UserDetailsComponent,
    UpdateUserComponent,
    ItemListComponent,
    ItemDetalsComponent,
    CreateItemComponent,
    UpdateItemComponent,
    CreatePackComponent,
    PackListComponent,
    NavparComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
