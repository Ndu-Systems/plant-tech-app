import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services';

@Component({
  selector: 'app-top-featured',
  templateUrl: './top-featured.component.html',
  styleUrls: ['./top-featured.component.scss']
})
export class TopFeaturedComponent implements OnInit {
  plants: Observable<Plant[]>;

  constructor(
    private plantService: PlantService
  ) {}

  ngOnInit() {
    this.plants = this.plantService.plants;
    this.plantService.getAllPlants();
  }
}
