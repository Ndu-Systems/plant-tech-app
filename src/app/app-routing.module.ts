import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule' },
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  {path: 'login', loadChildren: './account/account.module#AccountModule' },
];
export const declarations: Array<any> = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
