import { Component, OnInit } from "@angular/core";
import { NavigationProcessService } from "src/app/services/app-state";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  showNav: boolean;
  constructor(private navigationProcessService: NavigationProcessService) {}

  ngOnInit() {
    this.navigationProcessService.castNavigationProcess.subscribe(process => {
      this.showNav = process.showNav;

    });
  }

  // open navigation.
  openNav() {
    this.navigationProcessService.showNav();
  }

  closeNav(){
    this.navigationProcessService.closeNav();
  }
}
