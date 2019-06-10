import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

export const declarations: Array<any> = [
  HomeComponent,
  IndexComponent
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
