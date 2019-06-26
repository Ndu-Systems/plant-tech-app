import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Bed } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BedService {
  private _beds: BehaviorSubject<Bed[]>;
  beds: Observable<Bed[]>;
  url: string;
  private dataStore: {
    beds: Bed[];
  };
  constructor(private httpClient: HttpClient) {
    this.url = environment.API_URL;
    this.dataStore = { beds: [] };
    this._beds = <BehaviorSubject<Bed[]>>new BehaviorSubject([]);
    this.beds = this._beds.asObservable();
  }

  getAllBeds() {
    this.httpClient.get<Bed[]>(`${this.url}api/bed/get-beds.php`).subscribe(
      data => {
        this.dataStore.beds = data;
        this._beds.next(Object.assign({}, this.dataStore).beds);
      },
      error => console.log('could not get all beds')
    );
  }

  getBedById(id: string) {
    this.httpClient
      .get<Bed>(`${this.url}api/bed/get-beds.php?BedId=${id}`)
      .subscribe(
        data => {
          let notFound = true;
          this.dataStore.beds.forEach((item, index) => {
            if (item.BedId === data.BedId) {
              this.dataStore.beds[index] = data;
              notFound = false;
            }
          });
          if (notFound) {
            this.dataStore.beds.push(data);
          }
          this._beds.next(Object.assign({}, this.dataStore).beds);
        },
        error => console.log('Could not find bed')
      );
  }

  create(bed: Bed) {
    this.httpClient
      .post<Bed>(`${this.url}api/bed/add-bed.php`, JSON.stringify(bed))
      .subscribe(data => {
        this.dataStore.beds.push(data);
        this._beds.next(Object.assign({}, this.dataStore).beds);
      });
  }

  update(bed: Bed) {
    this.httpClient
      .put<Bed>(`${this.url}api/bed/update-bed.php`, JSON.stringify(bed))
      .subscribe(
        data => {
          this.dataStore.beds.forEach((item, index) => {
            if (item.BedId === data.BedId) {
              this.dataStore.beds[index] = data;
            }
          });
          this._beds.next(Object.assign({}, this.dataStore).beds);
        },
        error => console.log('Could not update plant')
      );
  }
}
