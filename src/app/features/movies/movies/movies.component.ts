import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { MoviesStoreSelectors } from '../../../store/movies/movies-store.selectors';
import { Observable, Subject } from 'rxjs';
import { Genres, Movie } from '../../../shared/types';
import { InvalidateSearch, QueryGenres, QueryMovies, QueryTvShows, SearchMovies } from '../../../store/movies/movies-store.actions';
import { delay, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { mergeGenres } from '../../../shared/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: [ './movies.component.scss' ],
})
export class MoviesComponent implements OnInit, OnDestroy {
  @Select(MoviesStoreSelectors.searchResult)
  searchResult$!: Observable<Array<Movie>>;

  @Select(MoviesStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;

  @Select(MoviesStoreSelectors.genres)
  genres$!: Observable<Genres>;

  destroy: Subject<boolean> = new Subject<boolean>();
  searchedMovieList$!: Observable<Array<Movie>>;
  movieList!: Observable<Array<Movie>>;
  formGroup = this.createFormGroup();

  constructor(
    readonly  store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new QueryGenres());
    this.store.dispatch(new QueryTvShows());
    this.store.dispatch(new QueryMovies());

    this.searchedMovieList$ = mergeGenres(this.genres$, this.searchResult$);
    this.movieList = mergeGenres(this.genres$, this.movies$);
    this.searchMovies();
  }

  ngOnDestroy() {
    this.store.dispatch(new InvalidateSearch());
  }

  createFormGroup() {
    return new FormGroup({
      search: new FormControl(''),
    });
  }

  searchMovies() {
    this.formGroup.controls.search.valueChanges.pipe(
      tap(() => this.store.dispatch(new InvalidateSearch())),
      delay(200),
      distinctUntilChanged(),
      filter(value => !!value),
      tap(value => {
        this.store.dispatch(new SearchMovies(value));
      }),
    ).subscribe();
  }
}
