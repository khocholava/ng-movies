import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../../tokens';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    @Inject(API_KEY) readonly apiKey: string,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        setParams: {
          api_key: this.apiKey,
          language: 'en-US',
          region: 'US',
        },
      }),
    );
  }
}
