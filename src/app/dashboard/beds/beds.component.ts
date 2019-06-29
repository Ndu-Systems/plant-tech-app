import { Component, OnInit } from '@angular/core';
import { BedService } from 'src/app/services/beds';
import { Observable } from 'rxjs';
import { Bed } from 'src/app/models';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.scss']
})
export class BedsComponent implements OnInit {
  beds: Observable<Bed[]>;
  constructor(private bedService: BedService) { }

  ngOnInit() {
    this.beds = this.bedService.beds;
    this.bedService.getAllBeds();
  }

}
