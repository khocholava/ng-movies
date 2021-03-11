import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxsModule } from '@ngxs/store';
import { API_BASE_URL, API_KEY, IMAGE_LINK_URL } from './tokens';
import { environment } from '../environments/environment';
import { RequestInterceptor } from './shared/indeterceptors/request.interceptor';
import { StoreModule } from './store/store.module';
import { MatButtonModule } from '@angular/material/button';
import { MovieDetailsComponent } from './features/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    NgxsModule.forRoot(),
    StoreModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.apiBaseUrl,
      multi: true,
    },
    {
      provide: IMAGE_LINK_URL,
      useValue: environment.posterLinkUrl,
      multi: true,
    },
    {
      provide: API_KEY,
      useValue: environment.apiKey,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
