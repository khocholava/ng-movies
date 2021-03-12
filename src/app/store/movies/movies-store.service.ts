import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseType, DictionaryType, Movie, MovieCast } from '../../shared/types';
import { API_BASE_URL } from '../../tokens';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesStoreService {

  constructor(
    readonly httpClient: HttpClient,
    @Inject(API_BASE_URL) readonly apiBaseUrl: string,
  ) {
  }

  queryMovies(): Observable<Array<Movie>> {
    return this.httpClient.get<ApiResponseType<Movie>>(`${this.apiBaseUrl}movie/now_playing`).pipe(
      map(m => m.results),
    );
  }

  queryMovie(movieId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiBaseUrl}movie/${movieId}`);
  }

  queryCasts(movieId: string): Observable<Array<MovieCast>> {
    return this.httpClient.get<Array<MovieCast>>(`${this.apiBaseUrl}movie/${movieId}/credits`);
  }

  queryRecommendations(movieId: string): Observable<Array<Movie>> {
    return this.httpClient.get<ApiResponseType<Movie>>(`${this.apiBaseUrl}movie/${movieId}/recommendations`).pipe(
      map(m => m.results),
    );
  }

  queryGenres(): Observable<Array<DictionaryType>> {
    return this.httpClient.get<Array<DictionaryType>>(`${this.apiBaseUrl}/genre/movie/list`);
  }

  queryTvShows(): Observable<Array<Movie>> {
    return this.httpClient.get<ApiResponseType<Movie>>(
      `${this.apiBaseUrl}tv/popular`,
    ).pipe(
      map(m => m.results),
    );
  }


}
