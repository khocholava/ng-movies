import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./features/movie-details/movie-details.module').then(m => m.MovieDetailsModule),
  },
  {
    path: 'movies-list',
    loadChildren: ()=> import('./features/movies/movies.module').then(m => m.MoviesModule)
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
