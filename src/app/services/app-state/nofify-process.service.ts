import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NotifyProcessModel, notifyHolder } from "src/app/models";

@Injectable({
  providedIn: "root"
})
export class NofifyProcessService {

  notifyProcess = new BehaviorSubject<NotifyProcessModel>(notifyHolder);
  constructor() {}

   getNotifyProcessState() {
    return this.notifyProcess.value;
  }

  setNotification(notify: NotifyProcessModel){
    this.notifyProcess.next(notify);
  }

  closeNotification(){
    this.notifyProcess.next(null);
  }
}
