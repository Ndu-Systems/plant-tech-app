import { Component, OnInit, Inject, HostListener } from "@angular/core";
import { NavigationProcessService } from "src/app/services/app-state";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  showNav: boolean;
  constructor(
    private navigationProcessService: NavigationProcessService,
    @Inject(DOCUMENT) document
  ) {}

  ngOnInit() {
    this.navigationProcessService.castNavigationProcess.subscribe(process => {
      this.showNav = process.showNav;
    });
  }

  // open navigation.
  openNav() {
    this.navigationProcessService.showNav();
    let element = document.getElementById("header-home");
    element.classList.remove("sticky");
  }

  closeNav() {
    this.navigationProcessService.closeNav();
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 550) {
      let element = document.getElementById("header-home");
      element.classList.add("sticky");
    } else {
      let element = document.getElementById("header-home");
      element.classList.remove("sticky");
    }
  }
}
