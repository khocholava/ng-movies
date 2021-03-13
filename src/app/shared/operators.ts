import { from, Observable } from 'rxjs';
import { Genres, Movie } from './types';
import { filter, map, mergeMap, switchMap, take, toArray } from 'rxjs/operators';

export function mergeAndTakeGenres(genres$: Observable<Genres>, movies$: Observable<Array<Movie>>) {
  return genres$.pipe(
    filter(item => !!item?.genres),
    map(item => item?.genres),
    map(genres => new Map(genres.map(genre => [ genre.id, genre ]))),
    mergeMap((genresMap) => {
      return movies$.pipe(
        map(movies => movies.map(movie => ({
          ...movie,
          genres: movie.genre_ids.map((id: number) => genresMap.get(id)?.name),
        }))),
      );
    }),
    switchMap(movies => from(movies)),
    take(6),
    toArray(),
  ) as Observable<Movie[]>;
}


export function mergeGenres(genres$: Observable<Genres>, movies$: Observable<Array<Movie>>) {
  return genres$.pipe(
    filter(item => !!item?.genres),
    map(item => item?.genres),
    map(genres => new Map(genres.map(genre => [ genre.id, genre ]))),
    mergeMap((genresMap) => {
      return movies$.pipe(
        map(movies => movies.map(movie => ({
          ...movie,
          genres: movie.genre_ids.map((id: number) => genresMap.get(id)?.name),
        }))),
      );
    }),
  ) as Observable<Movie[]>;
}
