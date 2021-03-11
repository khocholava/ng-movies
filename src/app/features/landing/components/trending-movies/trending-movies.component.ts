import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingStoreSelectors } from '../../../../store/landing-store/landing-store.selectors';
import { Select } from '@ngxs/store';
import { Movie } from '../../../../shared/types';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: [ './trending-movies.component.scss' ],
})
export class TrendingMoviesComponent implements OnInit {
  @Select(LandingStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
