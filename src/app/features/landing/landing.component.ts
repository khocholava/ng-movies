import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MoviesStoreSelectors } from '../../store/movies/movies-store.selectors';
import { Observable } from 'rxjs';
import { DictionaryType, Movie } from '../../shared/types';
import { QueryGenres, QueryMovies, QueryTvShows } from '../../store/movies/movies-store.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.scss' ],
})
export class LandingComponent implements OnInit {
  @Select(MoviesStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;

  @Select(MoviesStoreSelectors.genres)
  genres$!: Observable<Array<DictionaryType>>;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new QueryMovies());
    this.store.dispatch(new QueryGenres());
    this.store.dispatch(new QueryTvShows());
  }

}
