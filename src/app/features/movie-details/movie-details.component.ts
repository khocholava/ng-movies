import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngxs/store';
import { QueryCasts, QueryMovie, QueryRecommendations } from '../../store/movies/movies-store.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: [ './movie-details.component.scss' ],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
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
      this.queryRecommendations(id);
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

  queryRecommendations(movieId: string) {
    this.store.dispatch(new QueryRecommendations(movieId));
  }

  queryCasts(movieId: string) {
    this.store.dispatch(new QueryCasts(movieId));
  }
}
