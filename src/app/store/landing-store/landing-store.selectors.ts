import { Selector } from '@ngxs/store';
import { LandingStoreState } from './landing-store.state';
import { LandingStoreModel } from './landing-store.models';
import { Movie } from '../../shared/types';

export class LandingStoreSelectors {

  @Selector([ LandingStoreState ])
  static movies(state: LandingStoreModel): Partial<Array<Movie>> {
    return state.movies;
  }
}
