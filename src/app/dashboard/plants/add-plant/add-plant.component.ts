import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import {
  VIEWS,
  MEDICINE_ID,
  SYSTEM_USER,
  ACTIVE_STATUS
} from "src/app/shared/config";
import { PlantService } from "src/app/services/plants";
import { Plant } from "src/app/models";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-plant",
  templateUrl: "./add-plant.component.html",
  styleUrls: ["./add-plant.component.scss"]
})
export class AddPlantComponent implements OnInit {
  rForm: FormGroup;
  loading = false;
  error = "";
  plant: Plant;
  constructor(private fb: FormBuilder, private plantService: PlantService,private router: Router) {}

  ngOnInit() {
    this.rForm = this.fb.group({
      Name: ["", Validators.required],
      Description: ["", Validators.required],
      Views: [VIEWS, Validators.required],
      MedicineId: [MEDICINE_ID, Validators.required],
      CreateUserId: [SYSTEM_USER, Validators.required],
      ModifyUserId: [SYSTEM_USER, Validators.required],
      StatusId: [ACTIVE_STATUS, Validators.required]
    });
  }
  // convinient for easy form(rForm) data access
  get f() {
    return this.rForm.controls;
  }
  // addPlant() {
  //  this.plant = new Plant;
  //  this.plant.Name = this.f.Name.value;
  //  this.plant.Description = this.f.Description.value;
  //  this.plant.Views = this.f.Views.value;
  //  this.plant.MedicineId = this.f.MedicineId.value;
  //  this.plant.CreateUserId = this.f.CreateUserId.value;
  //  this.plant.ModifyUserId = this.f.ModifyUserId.value;
  //  this.plant.StatusId = this.f.StatusId.value;
  //  this.plantService.create(this.plant);
  // }
  addPlant() {

    this.router.navigate(["dashboard/notify-screen"]);
  }
}
