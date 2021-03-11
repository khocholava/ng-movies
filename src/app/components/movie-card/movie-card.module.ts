import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ MovieCardComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    TranslocoModule,
    MatButtonModule,
  ],
  exports: [
    MovieCardComponent,
  ],
})
export class MovieCardModule { }
