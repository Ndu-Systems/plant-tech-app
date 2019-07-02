import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SourceProcessModel, SOURCE_HOLDER } from "src/app/models";
import { SOURCE_Key } from "src/app/shared/config";

@Injectable({
  providedIn: "root"
})
export class SourceProcessService {
  sourceProcess = new BehaviorSubject<SourceProcessModel>(SOURCE_HOLDER);
  constructor() {}
  getSourceState() {
    let source = this.sourceProcess.value;
    if (source === undefined || source === null) {
      source = JSON.parse(localStorage.getItem(SOURCE_Key));
    }
    return source;
  }

  setSource(source: SourceProcessModel) {
    this.sourceProcess.next(source);
    localStorage.setItem(SOURCE_Key, JSON.stringify(source));
  }

  resetSource(){
    this.sourceProcess.next(SOURCE_HOLDER);
    localStorage.setItem(SOURCE_Key, null);
  }
}
