import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NavigationProcessModel, newNavState } from "src/app/models";

@Injectable({
  providedIn: "root"
})
export class NavigationProcessService {
  navigationProcess = new BehaviorSubject<NavigationProcessModel>(
    newNavState
    );

  castNavigationProcess = this.navigationProcess.asObservable();
  constructor() {}

  getNavigationProcessState() {
    return this.navigationProcess.value;
  }
  showNav() {
    const state = this.getNavigationProcessState();
    state.showNav = true;
    this.navigationProcess.next(state);
  }
  closeNav() {
    const state = this.getNavigationProcessState();
    state.showNav = false;
    this.navigationProcess.next(state);
  }
}
