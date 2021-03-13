export class QueryMovies {
  static readonly type = '[Movies] Query Movies';
}

export class QueryMovie {
  static readonly type = '[Movies] Query Movie';

  constructor(readonly movieId: string) {
  }
}

export class QueryCasts {
  static readonly type = '[Movie] Query Casts';

  constructor(readonly movieId: string) {
  }
}

export class InvalidateSearch {
  static readonly type = '[Movie] Invalidate Search';
}

export class QueryGenres {
  static readonly type = '[Movies] Query Genres';
}

export class QueryTvShows {
  static readonly type = '[Movies] Query Tv Shows';
}

export class SearchMovies {
  static readonly type = '[Movies] Search Movies';
  constructor(readonly name: string) {
  }
}
