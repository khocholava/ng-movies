import { Action, State, StateContext } from '@ngxs/store';
import { LandingStoreModel } from './landing-store.models';
import { Injectable } from '@angular/core';
import { QueryMovies } from './landing-store.actions';
import { LandingStoreService } from './landing-store.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/types';

@State<LandingStoreModel>({
  name: 'landing',
  defaults: {
    movie: {},
    movies: [],
  },
})
@Injectable()
export class LandingStoreState {
  constructor(
    private landingStoreService: LandingStoreService,
  ) {
  }

  @Action(QueryMovies)
  queryMovies({ patchState }: StateContext<LandingStoreModel>): Observable<Array<Movie>> {
    return this.landingStoreService.queryMovies().pipe(
      tap(movies => {
        patchState({
          movies,
        });
      }),
    );
  }
}
