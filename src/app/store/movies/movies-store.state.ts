import { Action, State, StateContext } from '@ngxs/store';
import { MovieStoreModel } from './movies-store.models';
import { Injectable } from '@angular/core';
import { InvalidateSearch, QueryCasts, QueryGenres, QueryMovie, QueryMovies, QueryTvShows, SearchMovies } from './movies-store.actions';
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
    searchResult: [],
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

  @Action(SearchMovies)
  searchMovies({ patchState }: StateContext<MovieStoreModel>, action: SearchMovies) {
    return this.landingStoreService.searchMovie(action.name).pipe(
      tap(searchResult => {
        patchState({
          searchResult,
        });
      }),
    );
  }

  @Action(InvalidateSearch)
  invalidateSearch({ getState, setState }: StateContext<MovieStoreModel>) {
    const state = getState();
    setState({
      ...state,
      searchResult: [],
    });
  }
}
