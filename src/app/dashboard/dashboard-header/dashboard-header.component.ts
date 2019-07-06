import { Component, OnInit, Inject, HostListener } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-dashboard-header",
  templateUrl: "./dashboard-header.component.html",
  styleUrls: ["./dashboard-header.component.scss"]
})
export class DashboardHeaderComponent implements OnInit {
  username: string = "guest";
  constructor() {}

  ngOnInit() {}
}
