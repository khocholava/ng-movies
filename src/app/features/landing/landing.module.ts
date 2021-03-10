import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingSliderComponent } from './components/landing-slider/landing-slider.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];


@NgModule({
  declarations: [ LandingComponent, LandingSliderComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCarouselModule.forRoot(),
  ],
})
export class LandingModule {
}
