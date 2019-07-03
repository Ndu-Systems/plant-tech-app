import { Component, OnInit } from "@angular/core";
import { SourceProcessModel, Bed, PlantBed, Plant } from "src/app/models";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { BedService } from "src/app/services/beds";
import { SourceProcessService } from "src/app/services/app-state";
import { map } from "rxjs/operators";
import { PlantBedService } from "src/app/services/plant-bed";
import { PlantService } from "src/app/services/plants";
@Component({
  selector: "app-bed-plant-list",
  templateUrl: "./bed-plant-list.component.html",
  styleUrls: ["./bed-plant-list.component.scss"]
})
export class BedPlantListComponent implements OnInit {
  source: SourceProcessModel;
  bed: Observable<Bed>;
  bedId: string;
  plantsForBeds: Observable<PlantBed[]>;
  plants: Observable<Plant[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bedService: BedService,
    private routeTo: Router,
    private sourceProcessService: SourceProcessService,
    private plantBedService: PlantBedService,
    private plantService: PlantService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(r => {
      this.bedId = r["id"];
    });

    this.bed = this.bedService.beds.pipe(
      map(beds => beds.find(item => item.BedId === this.bedId))
    );

    this.plantsForBeds = this.plantBedService.plantsForBeds.pipe(
      map(plantsForBeds =>
        plantsForBeds.filter(bed => bed.BedId === this.bedId)
      )
    );

    this.plants = this.plantService.plants.pipe(
      map(plants =>
        plants.filter(plant =>
          this.plantsForBeds.pipe(
            map(plantsObj =>
              plantsObj.find(plantObj => plantObj.PlantId === plant.PlantId)
            )
          )
        )
      )
    );
  }
}
