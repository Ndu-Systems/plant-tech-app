import { Component, OnInit } from '@angular/core';
import { NavigationProcessService } from 'src/app/services';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {

  constructor(private navigationProcessService: NavigationProcessService) {}

  ngOnInit() {
  }
  closeNav(){
    this.navigationProcessService.closeNav();
  }

}
