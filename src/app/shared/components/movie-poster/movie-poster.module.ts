import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from './movie-poster.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MoviePosterComponent,
  ],
  exports: [
    MoviePosterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class MoviePosterModule { }
