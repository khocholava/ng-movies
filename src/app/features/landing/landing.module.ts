import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingSliderComponent } from './components/landing-slider/landing-slider.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { MovieCardModule } from '../../shared/components/movie-card/movie-card.module';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { TrendingTvShowsComponent } from './components/trending-tv-shows/trending-tv-shows.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];


@NgModule({
  declarations: [ LandingComponent, LandingSliderComponent, TrendingMoviesComponent, TrendingTvShowsComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCarouselModule.forRoot(),
    MovieCardModule,
    TranslocoModule,
    MatButtonModule,
  ],
})
export class LandingModule {
}
