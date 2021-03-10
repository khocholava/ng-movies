import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingSliderComponent } from './components/landing-slider/landing-slider.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { MovieCardModule } from '../../components/movie-card/movie-card.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];


@NgModule({
  declarations: [ LandingComponent, LandingSliderComponent, TrendingMoviesComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCarouselModule.forRoot(),
    MovieCardModule,
  ],
})
export class LandingModule {
}
