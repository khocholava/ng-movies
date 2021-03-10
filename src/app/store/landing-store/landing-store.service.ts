import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseType, Movie } from '../../shared/types';
import { API_BASE_URL } from '../../tokens';
import { map } from 'rxjs/operators';

@Injectable()
export class LandingStoreService {

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
}
