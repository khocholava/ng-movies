import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LandingStoreSelectors } from '../../store/landing-store/landing-store.selectors';
import { Observable } from 'rxjs';
import { DictionaryType, Movie } from '../../shared/types';
import { QueryGenres, QueryMovies } from '../../store/landing-store/landing-store.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.scss' ],
})
export class LandingComponent implements OnInit {
  @Select(LandingStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;

  @Select(LandingStoreSelectors.genres)
  genres$!: Observable<Array<DictionaryType>>;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new QueryMovies());
    this.store.dispatch(new QueryGenres());
  }

}
