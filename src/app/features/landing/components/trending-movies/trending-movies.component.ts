import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { LandingStoreSelectors } from '../../../../store/landing-store/landing-store.selectors';
import { Select, Store } from '@ngxs/store';
import { Genres, Movie } from '../../../../shared/types';
import { filter, map, mergeMap, switchMap, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: [ './trending-movies.component.scss' ],
})
export class TrendingMoviesComponent implements OnInit, OnDestroy {
  @Select(LandingStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;

  @Select(LandingStoreSelectors.genres)
  genres$!: Observable<Genres>;

  destroy: Subject<boolean> = new Subject<boolean>();
  movieList!: Observable<Array<Movie>>;

  constructor(
    readonly store: Store,
  ) {
  }

  ngOnInit(): void {
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
      switchMap(movies => from(movies)),
      take(6),
      toArray(),
    ) as Observable<Array<Movie>>;
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
