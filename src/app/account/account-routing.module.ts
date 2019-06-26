import { AccountComponent } from './account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';


const routes: Routes = [
  { path: '', component:LoginComponent},

];
export const declarations: Array<any> = [
  LoginComponent,
  AccountComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
