import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { QueryCasts, QueryMovie } from '../../store/movies/movies-store.actions';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesStoreSelectors } from '../../store/movies/movies-store.selectors';
import { Movie, MovieCast } from '../../shared/types';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: [ './movie-details.component.scss' ],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  @Select(MoviesStoreSelectors.movie)
  movie$!: Observable<Movie>;

  @Select(MoviesStoreSelectors.cast)
  cast$!: Observable<Array<MovieCast>>;


  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    readonly router: ActivatedRoute,
    readonly store: Store,
  ) {
  }

  ngOnInit(): void {
    this.router.params.pipe(
      takeUntil(this.destroy$),
    ).subscribe((params: Params) => {
      const id = params?.id;
      this.queryMovie(id);
      this.queryCasts(id);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  queryMovie(movieId: string) {
    this.store.dispatch(new QueryMovie(movieId));
  }

  queryCasts(movieId: string) {
    this.store.dispatch(new QueryCasts(movieId));
  }
}
