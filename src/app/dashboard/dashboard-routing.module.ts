import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { UnderConstructionComponent } from "./under-construction/under-construction.component";
import {
  DashboardHomeComponent,
  DashboardNavComponent
} from "./dashboard-home";
import { BedsComponent } from "./beds";
import { PlantsComponent, AddPlantComponent } from "./plants";
import { NotifyScreenComponent } from "./notify-screen";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: DashboardHomeComponent
      },
      {
        path: "plants",
        component: PlantsComponent
      },
      {
        path: "add-plant",
        component: AddPlantComponent
      },
      {
        path: "notify-screen",
        component: NotifyScreenComponent
      }
    ]
  }
];
export const declarations: Array<any> = [
  DashboardComponent,
  UnderConstructionComponent,
  DashboardHomeComponent,
  DashboardNavComponent,
  BedsComponent,
  PlantsComponent,
  AddPlantComponent,
  NotifyScreenComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
