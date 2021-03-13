import { DictionaryType, Movie, MovieCast } from '../../shared/types';

export interface MovieStoreModel {
  movies: Partial<Array<Movie>>;
  movie: Partial<Movie>;
  genres: Partial<Array<DictionaryType>>;
  tvShows: Partial<Array<Movie>>;
  casts: Partial<Array<MovieCast>>;
  searchResult: Partial<Array<Movie>>;
}
