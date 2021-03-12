import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MoviesStoreSelectors } from '../../../../store/movies/movies-store.selectors';
import { from, Observable, Subject } from 'rxjs';
import { Genres, Movie } from '../../../../shared/types';
import { filter, map, mergeMap, switchMap, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-trending-tv-shows',
  templateUrl: './trending-tv-shows.component.html',
  styleUrls: [ './trending-tv-shows.component.scss' ],
})
export class TrendingTvShowsComponent implements OnInit, OnDestroy {
  @Select(MoviesStoreSelectors.tvShows)
  tvShows$!: Observable<Array<Movie>>;

  @Select(MoviesStoreSelectors.genres)
  genres$!: Observable<Genres>;

  destroy: Subject<boolean> = new Subject<boolean>();
  tvShowList!: Observable<Array<Movie>>;

  constructor(
    readonly store: Store,
  ) {
  }

  ngOnInit(): void {
    this.tvShowList = this.genres$.pipe(
      filter(item => !!item?.genres),
      map(item => item?.genres),
      map(genres => new Map(genres.map(genre => [ genre.id, genre ]))),
      mergeMap((genresMap) => {
        return this.tvShows$.pipe(
          map(movies => movies.map(tvShow => ({
            ...tvShow,
            genres: tvShow.genre_ids.map((id: number) => genresMap.get(id)?.name),
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
