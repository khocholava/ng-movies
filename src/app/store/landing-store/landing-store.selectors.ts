import { Selector } from '@ngxs/store';
import { LandingStoreState } from './landing-store.state';
import { LandingStoreModel } from './landing-store.models';
import { DictionaryType, Movie } from '../../shared/types';

export class LandingStoreSelectors {

  @Selector([ LandingStoreState ])
  static movies(state: LandingStoreModel): Partial<Array<Movie>> {
    return state.movies;
  }

  @Selector([ LandingStoreState ])
  static genres(state: LandingStoreModel): Partial<Array<DictionaryType>> {
    return state.genres;
  }
}
