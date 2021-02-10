import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {DeleteUserComponent} from './components/delete-user/delete-user.component';
import {ListUserComponent} from './components/list-user/list-user.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'edit-user/:id', component: EditUserComponent},
  {path: 'delete-user', component: DeleteUserComponent},
  {path: 'list-user', component: ListUserComponent},
  {path: 'login', component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
