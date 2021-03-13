import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MoviesStoreSelectors } from '../../store/movies/movies-store.selectors';
import { Observable, Subject } from 'rxjs';
import { Genres, Movie } from '../../shared/types';
import { InvalidateSearch, QueryGenres, QueryTvShows, SearchMovies } from '../../store/movies/movies-store.actions';
import { mergeGenres } from '../../shared/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, distinctUntilChanged, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: [ './tv-shows.component.scss' ],
})
export class TvShowsComponent implements OnInit, OnDestroy {

  @Select(MoviesStoreSelectors.searchResult)
  searchResult$!: Observable<Array<Movie>>;

  @Select(MoviesStoreSelectors.tvShows)
  tvShows$!: Observable<Array<Movie>>;

  @Select(MoviesStoreSelectors.genres)
  genres$!: Observable<Genres>;

  destroy: Subject<boolean> = new Subject<boolean>();
  searchedMovieList$!: Observable<Array<Movie>>;
  tvShowsList$!: Observable<Array<Movie>>;
  formGroup = this.createFormGroup();

  constructor(
    readonly  store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new QueryGenres());
    this.store.dispatch(new QueryTvShows());

    this.searchedMovieList$ = mergeGenres(this.genres$, this.searchResult$);
    this.tvShowsList$ = mergeGenres(this.genres$, this.tvShows$);
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
