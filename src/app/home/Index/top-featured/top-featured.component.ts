import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-top-featured',
  templateUrl: './top-featured.component.html',
  styleUrls: ['./top-featured.component.scss']
})
export class TopFeaturedComponent implements OnInit {
  plants: Plant[] = [
    {
      PlantId: '33c5f566-8d59-11e9-bd99-80fa5b45280e',
      Name: 'Rare plant',
      Description: 'Test Dummy 1',
      Views: 19,
      MedicineId: '1',
      CreateUserId: 'sys',
      CreateDate: new Date('2019-06-12 23:29:47'),
      ModifyUserId: 'sys_update',
      ModifyDate: new Date('2019-06-13 06:48:28'),
      StatusId: 1,
      Location:"RitsonBotanical Gardens",
      Seasons: "All year"
    },
    {
      PlantId: '4fef47c2-8d59-11e9-bd99-80fa5b45280e',
      Name: 'Rare flower',
      Description: 'Test Dummy 2',
      Views: 1,
      MedicineId: '1',
      CreateUserId: 'sys',
      CreateDate: new Date('2019-06-12 23:29:47'),
      ModifyUserId: 'sys_update',
      ModifyDate: new Date('2019-06-13 06:48:28'),
      StatusId: 1,
      Location:"RitsonBotanical Gardens",
      Seasons: "All year"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
