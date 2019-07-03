import { Injectable } from '@angular/core';
import { PlantBed } from 'src/app/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantBedService {
  private _plantBeds: BehaviorSubject<PlantBed[]>;
  plantsForBeds: Observable<PlantBed[]>;
  url: string;
  private dataStore: {
    plantsForBeds: PlantBed[];
  };
  constructor(private httpClient: HttpClient) {
    this.url = environment.API_URL;
    this.dataStore = { plantsForBeds: [] };
    this._plantBeds = <BehaviorSubject<PlantBed[]>>new BehaviorSubject([]);
    this.plantsForBeds = this._plantBeds.asObservable();
  }

  getAllPlantsForBeds() {
    this.httpClient
      .get<PlantBed[]>(`${this.url}api/plant-bed/getplant-bed.php`)
      .subscribe(
        data => {
          this.dataStore.plantsForBeds = data;
          this._plantBeds.next(Object.assign({}, this.dataStore).plantsForBeds);
        },
        error => console.log('could not receive plants for beds')
      );
  }

  create(plantBed: PlantBed) {
    this.httpClient
      .post<PlantBed>(
        `${this.url}api/plant-bed/add-plant-bed.php`,
        JSON.stringify(plantBed)
      )
      .subscribe(data => {
        this.dataStore.plantsForBeds.push(data);
        this._plantBeds.next(Object.assign({}, this.dataStore).plantsForBeds);
      });
  }
}
