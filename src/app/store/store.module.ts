import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { MoviesStoreState } from './movies/movies-store.state';
import { MoviesStoreModule } from './movies/movies-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forFeature([MoviesStoreState]),
    MoviesStoreModule
  ]
})
export class StoreModule { }
