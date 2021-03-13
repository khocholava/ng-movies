import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { MoviesStoreSelectors } from '../../../store/movies/movies-store.selectors';
import { Observable, Subject } from 'rxjs';
import { Genres, Movie } from '../../../shared/types';
import { QueryGenres, QueryMovies, QueryTvShows, SearchMovies } from '../../../store/movies/movies-store.actions';
import { delay, distinctUntilChanged, filter, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: [ './movies.component.scss' ],
})
export class MoviesComponent implements OnInit {
  @Select(MoviesStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;

  @Select(MoviesStoreSelectors.genres)
  genres$!: Observable<Genres>;

  destroy: Subject<boolean> = new Subject<boolean>();
  movieList!: Observable<Array<Movie>>;

  formGroup = this.createFormGroup();

  constructor(
    readonly  store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new QueryMovies());
    this.store.dispatch(new QueryGenres());
    this.store.dispatch(new QueryTvShows());

    this.movieList = this.genres$.pipe(
      filter(item => !!item?.genres),
      map(item => item?.genres),
      map(genres => new Map(genres.map(genre => [ genre.id, genre ]))),
      mergeMap((genresMap) => {
        return this.movies$.pipe(
          map(movies => movies.map(movie => ({
            ...movie,
            genres: movie.genre_ids.map((id: number) => genresMap.get(id)?.name),
          }))),
        );
      }),
    ) as Observable<Array<Movie>>;
    this.searchMovies();
  }

  createFormGroup() {
    return new FormGroup({
      search: new FormControl(''),
    });
  }

  searchMovies() {
    this.formGroup.controls.search.valueChanges.pipe(
      // delay(2000),
      distinctUntilChanged(),
      filter(value =>  !!value),
      tap(value => {
        this.store.dispatch(new SearchMovies(value));
      }),
      filter(value => !value),
      tap(() => this.store.dispatch(new QueryMovies())),
      delay(200)
    ).subscribe();
  }
}
