import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesStoreService } from './movies-store.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    MoviesStoreService,
  ],
})
export class MoviesStoreModule {
}
