import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MoviePosterModule } from '../../shared/components/movie-poster/movie-poster.module';
import { MovieOverviewComponent } from './components/movie-overview/movie-overview.component';
import { TranslocoModule } from '@ngneat/transloco';
import { TimePipeModule } from '../../shared/pipes/time.pipe';
import { CastComponent } from './components/cast/cast.component';
import { CastCardModule } from '../../shared/components/cast-card/cast-card.module';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
  },
];

@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieOverviewComponent,
    CastComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MoviePosterModule,
    TranslocoModule,
    TimePipeModule,
    CastCardModule,
  ],
})
export class MovieDetailsModule {
}
