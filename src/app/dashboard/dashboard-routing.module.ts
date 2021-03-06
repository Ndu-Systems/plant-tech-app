import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { UnderConstructionComponent } from "./under-construction/under-construction.component";
import {
  DashboardHomeComponent,
  DashboardNavComponent,
  StatsComponent
} from "./dashboard-home";
import {
  BedsComponent,
  AddBedComponent,
  BedListComponent,
  BedPlantListComponent
} from "./beds";
import {
  PlantsComponent,
  AddPlantComponent,
  PlantListComponent
} from "./plants";
import { NotifyScreenComponent } from "./notify-screen";
import { DashboardHeaderComponent } from "./dashboard-header";

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
      },
      {
        path: "beds",
        component: BedsComponent
      },
      {
        path: "add-bed",
        component: AddBedComponent
      },
      {
        path: "bed-plants/:id",
        component: BedPlantListComponent
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
  NotifyScreenComponent,
  AddBedComponent,
  BedListComponent,
  BedPlantListComponent,
  StatsComponent,
  PlantListComponent,
  DashboardHeaderComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
