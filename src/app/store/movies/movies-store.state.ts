import { Action, State, StateContext } from '@ngxs/store';
import { MovieStoreModel } from './movies-store.models';
import { Injectable } from '@angular/core';
import { QueryCasts, QueryGenres, QueryMovie, QueryMovies, QueryRecommendations, QueryTvShows } from './movies-store.actions';
import { MoviesStoreService } from './movies-store.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/types';

@State<MovieStoreModel>({
  name: 'landing',
  defaults: {
    movie: {},
    movies: [],
    genres: [],
    tvShows: [],
    casts: [],
    recommendations: [],
  },
})
@Injectable()
export class MoviesStoreState {
  constructor(
    private landingStoreService: MoviesStoreService,
  ) {
  }

  @Action(QueryMovies)
  queryMovies({ patchState }: StateContext<MovieStoreModel>): Observable<Array<Movie>> {
    return this.landingStoreService.queryMovies().pipe(
      tap(movies => {
        patchState({
          movies,
        });
      }),
    );
  }

  @Action(QueryMovie)
  queryMovie({ patchState }: StateContext<MovieStoreModel>, { movieId }: QueryMovie): Observable<Movie> {
    return this.landingStoreService.queryMovie(movieId).pipe(
      tap(movie => {
        patchState({
          movie,
        });
      }),
    );
  }

  @Action(QueryRecommendations)
  queryRecommendations({ patchState }: StateContext<MovieStoreModel>, { movieId }: QueryRecommendations): Observable<Array<Movie>> {
    return this.landingStoreService.queryRecommendations(movieId).pipe(
      tap(movies => {
        patchState({
          movies,
        });
      }),
    );
  }

  @Action(QueryCasts)
  queryCasts({ patchState }: StateContext<MovieStoreModel>, { movieId }: QueryCasts) {
    return this.landingStoreService.queryCasts(movieId).pipe(
      tap(casts => {
        patchState({
          casts,
        });
      }),
    );
  }

  @Action(QueryTvShows)
  queryTvShows({ patchState }: StateContext<MovieStoreModel>): Observable<Array<Movie>> {
    return this.landingStoreService.queryTvShows().pipe(
      tap(tvShows => {
        patchState({
          tvShows,
        });
      }),
    );
  }

  @Action(QueryGenres)
  queryGenres({ patchState }: StateContext<MovieStoreModel>) {
    return this.landingStoreService.queryGenres().pipe(
      tap(genres => {
        patchState({
          genres,
        });
      }),
    );
  }
}
