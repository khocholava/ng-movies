import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MoviesStoreSelectors } from '../../../../store/movies/movies-store.selectors';
import { Select, Store } from '@ngxs/store';
import { Genres, Movie } from '../../../../shared/types';
import { mergeAndTakeGenres } from '../../../../shared/operators';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: [ './trending-movies.component.scss' ],
})
export class TrendingMoviesComponent implements OnInit, OnDestroy {
  @Select(MoviesStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;

  @Select(MoviesStoreSelectors.genres)
  genres$!: Observable<Genres>;

  destroy: Subject<boolean> = new Subject<boolean>();
  movieList!: Observable<Array<Movie>>;

  constructor(
    readonly store: Store,
  ) {
  }

  ngOnInit(): void {
    this.movieList = mergeAndTakeGenres(this.genres$, this.movies$);
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
