import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from './tv-shows.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslocoModule } from '@ngneat/transloco';
import { MovieCardModule } from '../../shared/components/movie-card/movie-card.module';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: TvShowsComponent
  }
];

@NgModule({
  declarations: [TvShowsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    TranslocoModule,
    MovieCardModule,
    MatInputModule,
  ],
})
export class TvShowsModule { }
