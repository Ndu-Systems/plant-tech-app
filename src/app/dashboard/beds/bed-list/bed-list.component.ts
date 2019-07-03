import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BedService } from "src/app/services/beds";
import { Bed, SourceProcessModel } from "src/app/models";
import { SourceProcessService } from "src/app/services/app-state";

@Component({
  selector: "app-bed-list",
  templateUrl: "./bed-list.component.html",
  styleUrls: ["./bed-list.component.scss"]
})
export class BedListComponent implements OnInit {
  beds: Observable<Bed[]>;
  source: SourceProcessModel;
  sourceUrl= "../beds";
  constructor(
    private bedService: BedService,
    private routeTo: Router,
    private sourceProcessService: SourceProcessService
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.beds = this.bedService.beds;
    this.bedService.getAllBeds();
  }

  view(BedId: string) {

    this.source = new SourceProcessModel;
    this.source.SourceId = BedId;
    this.source.SourceUrl = this.sourceUrl;
    this.sourceProcessService.setSource(this.source);
    this.routeTo.navigate([`dashboard/bed-plants/${BedId}`]);
  }
}
