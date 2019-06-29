import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { DashboardHomeComponent, DashboardNavComponent } from './dashboard-home';
import { BedsComponent } from './beds';
import { PlantsComponent } from './plants';

const routes: Routes = [{ path: '', component: DashboardComponent,
children: [
  {
    path: '',
    component: DashboardHomeComponent
  }
] }];
export const declarations: Array<any> = [
  DashboardComponent,
  UnderConstructionComponent,
  DashboardHomeComponent,
  DashboardNavComponent,
  BedsComponent,
  PlantsComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
