import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plants';
import { Plant } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  plants: Observable<Plant[]>;

  constructor(
    private plantService: PlantService
  ) { }
  ngOnInit() {
    window.scrollTo(0, 0)
    this.plants = this.plantService.plants;
    this.plantService.getAllPlants();
  }
}
