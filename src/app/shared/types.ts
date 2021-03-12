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
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: Array<string> | Array<DictionaryType>;
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
