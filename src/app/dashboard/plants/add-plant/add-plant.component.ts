import { URL_TO, SUCCESS, MESSAGE_NOTIFIER, URL_TAG } from './../../../shared/config';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  VIEWS,
  MEDICINE_ID,
  SYSTEM_USER,
  ACTIVE_STATUS
} from 'src/app/shared/config';
import { PlantService } from 'src/app/services/plants';
import { Plant, NotifyProcessModel } from 'src/app/models';
import { Router } from '@angular/router';
import { NotifyProcessService } from 'src/app/services/app-state';


@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {
  rForm: FormGroup;
  loading = false;
  error = '';
  plant: Plant;
  notifyModel: NotifyProcessModel;
  URL_TO = '../plants';
  MESSAGE_NOTIFIER = 'Plant added successfully.';
  URL_TAG = 'go to plants'
  constructor(
    private fb: FormBuilder,
    private plantService: PlantService,
    private router: Router,
    private notifyProcessService: NotifyProcessService
  ) {}

  ngOnInit() {
    this.rForm = this.fb.group({
      Name: [null, Validators.required],
      Description: [null, Validators.required],
      Views: [VIEWS, Validators.required],
      MedicineId: [MEDICINE_ID, Validators.required],
      CreateUserId: [SYSTEM_USER, Validators.required],
      ModifyUserId: [SYSTEM_USER, Validators.required],
      StatusId: [ACTIVE_STATUS, Validators.required]
    });
    this.notifyModel = this.notifyProcessService.getNotifyProcessState();
  }
  // convinient for easy form(rForm) data access
  get f() {
    return this.rForm.controls;
  }
  addPlant() {
    this.plant = new Plant();
    this.plant.Name = this.f.Name.value;
    this.plant.Description = this.f.Description.value;
    this.plant.Views = this.f.Views.value;
    this.plant.MedicineId = this.f.MedicineId.value;
    this.plant.CreateUserId = this.f.CreateUserId.value;
    this.plant.ModifyUserId = this.f.ModifyUserId.value;
    this.plant.StatusId = this.f.StatusId.value;

    this.plantService.create(this.plant);

    this.notifyModel = new NotifyProcessModel;
    this.notifyModel.ImageTag = SUCCESS;
    this.notifyModel.Message = this.MESSAGE_NOTIFIER;
    this.notifyModel.UrlTo = this.URL_TAG;
    this.notifyModel.url = this.URL_TO;
    this.notifyProcessService.setNotification(this.notifyModel);

    this.router.navigate(['dashboard/notify-screen']);
  }
}
