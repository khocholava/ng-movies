import { DictionaryType, Movie } from '../../shared/types';

export interface LandingStoreModel {
  movies: Partial<Array<Movie>>;
  movie: Partial<Movie>;
  genres: Partial<Array<DictionaryType>>;
}
