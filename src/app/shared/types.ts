export interface ApiResponseType<T> {
  dates: {
    maximum: string;
    minimum: string
  };
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<T>;
}

type GenreType = Array<string> | Array<DictionaryType>;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date?: string;
  title: string;
  runtime: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: GenreType;
  original_name?: string;
}


export interface MovieCastResponse {
  cast: Array<MovieCast>;
  crew: Array<MovieCast>;
}

export interface MovieCast {
  name: string;
  profile_path: string;
}

export interface Genres {
  genres: Array<DictionaryType>;
}

export interface DictionaryType {
  id: number;
  name: string;
}
