import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent, TopFeaturedComponent, BannerComponent } from './Index';
import { HeaderComponent } from './header';
import { HomeNavComponent } from './home-nav';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];
export const declarations: Array<any> = [
  HomeComponent,
  IndexComponent,
  HeaderComponent,
  TopFeaturedComponent,
  BannerComponent,
  HomeNavComponent

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
