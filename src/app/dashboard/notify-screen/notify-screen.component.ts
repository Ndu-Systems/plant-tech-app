import { Component, OnInit } from '@angular/core';
import { NotifyProcessModel } from 'src/app/models';
import { NotifyProcessService } from 'src/app/services/app-state';

@Component({
  selector: 'app-notify-screen',
  templateUrl: './notify-screen.component.html',
  styleUrls: ['./notify-screen.component.scss']
})
export class NotifyScreenComponent implements OnInit {
  notifyModel: NotifyProcessModel;
  constructor(
    private notifyProcessService: NotifyProcessService
  ) { }

  ngOnInit() {
    this.notifyModel = this.notifyProcessService.getNotifyProcessState();
    console.log(this.notifyModel);
  }

}
