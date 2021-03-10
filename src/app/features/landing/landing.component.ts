import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LandingStoreSelectors } from '../../store/landing-store/landing-store.selectors';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/types';
import { QueryMovies } from '../../store/landing-store/landing-store.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.scss' ],
})
export class LandingComponent implements OnInit {
  @Select(LandingStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new QueryMovies());
  }

}
