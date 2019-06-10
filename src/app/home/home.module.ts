import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { declarations, HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [...declarations]
})
export class HomeModule { }
