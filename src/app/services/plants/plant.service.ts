import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Plant } from "src/app/models";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlantService {
  private _plants: BehaviorSubject<Plant[]>;
  plants: Observable<Plant[]>;
  url: string;
  private dataStore: {
    plants: Plant[];
  };

  constructor(private httpClient: HttpClient) {
    this.url = environment.API_URL;
    this.dataStore = { plants: [] };
    this._plants = <BehaviorSubject<Plant[]>>new BehaviorSubject([]);
    this.plants = this._plants.asObservable();
  }

  getAllPlants() {
    this.httpClient
      .get<Plant[]>(`${this.url}api/plant/get-plants.php`)
      .subscribe(
        data => {
          this.dataStore.plants = data;
          this._plants.next(Object.assign({}, this.dataStore).plants);
        },
        error => console.log("could not get all plants.")
      );
  }

  // TODO CRUD operations
  getPlantById(id: string) {
    this.httpClient
      .get<Plant>(`${this.url}api/plant/get-plants.php?PlantId=${id}`)
      .subscribe(
        data => {
          let notFound = true;

          this.dataStore.plants.forEach((item, index) => {
            if (item.PlantId === data.PlantId) {
              this.dataStore.plants[index] = data;
              notFound = false;
            }
          });

          if (notFound) {
            this.dataStore.plants.push(data);
          }
          this._plants.next(Object.assign({}, this.dataStore).plants);
        },
        error => console.log("Could not load plant")
      );
  }

  create(plant: Plant) {
    this.httpClient
      .post<Plant>(`${this.url}api/plant`, JSON.stringify(plant))
      .subscribe(data => {
        this.dataStore.plants.push(data);
        this._plants.next(Object.assign({}, this.dataStore).plants);
      });
  }

  update(plant: Plant) {
    this.httpClient
      .put<Plant>(
        `${this.url}api/plant/update-plant.php`,
        JSON.stringify(plant)
      )
      .subscribe(data => {
        this.dataStore.plants.forEach((item, index) => {
          if (item.PlantId === data.PlantId) {
            this.dataStore.plants[index] = data;
          }
        });
        this._plants.next(Object.assign({}, this.dataStore).plants);
      }, error => console.log('Could not update plant'));
  }
}
