import { Selector } from '@ngxs/store';
import { MoviesStoreState } from './movies-store.state';
import { MovieStoreModel } from './movies-store.models';
import { DictionaryType, Movie } from '../../shared/types';

export class MoviesStoreSelectors {

  @Selector([ MoviesStoreState ])
  static movies(state: MovieStoreModel): Partial<Array<Movie>> {
    return state.movies;
  }

  @Selector([ MoviesStoreState ])
  static tvShows(state: MovieStoreModel): Partial<Array<Movie>> {
    return state.tvShows;
  }

  @Selector([ MoviesStoreState ])
  static genres(state: MovieStoreModel): Partial<Array<DictionaryType>> {
    return state.genres;
  }
}
