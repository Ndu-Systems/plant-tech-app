import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BedService } from 'src/app/services/beds';
import { Bed } from 'src/app/models';

@Component({
  selector: 'app-bed-list',
  templateUrl: './bed-list.component.html',
  styleUrls: ['./bed-list.component.scss']
})
export class BedListComponent implements OnInit {
  beds: Observable<Bed[]>;
  constructor(private bedService: BedService) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.beds = this.bedService.beds;
    this.bedService.getAllBeds();
  }

}
