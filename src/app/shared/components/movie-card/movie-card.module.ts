import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ MovieCardComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    TranslocoModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
  ],
  exports: [
    MovieCardComponent,
  ],
})
export class MovieCardModule {
}
