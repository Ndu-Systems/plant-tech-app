import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { NotifyProcessModel, NOTIFY_HOLDER } from "src/app/models";
import { NOTIFY_Key } from "src/app/shared/config";

@Injectable({
  providedIn: "root"
})
export class NotifyProcessService {
  notifyProcess = new BehaviorSubject<NotifyProcessModel>(NOTIFY_HOLDER);
  constructor() {}

  getNotifyProcessState() {
   let notify = this.notifyProcess.value;
    if(notify === undefined || notify === null){
      notify = JSON.parse(localStorage.getItem(NOTIFY_Key));
    }
    return notify;
  }

  setNotification(notify: NotifyProcessModel) {
    this.notifyProcess.next(notify);
    localStorage.setItem(NOTIFY_Key, JSON.stringify(notify));
  }

  closeNotification() {
    this.notifyProcess.next(null);
  }
}
