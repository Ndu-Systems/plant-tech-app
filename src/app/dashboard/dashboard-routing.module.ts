import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { DashboardHomeComponent, DashboardNavComponent } from './dashboard-home';
import { PlantComponent } from './plant';

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
  PlantComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
