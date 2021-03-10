import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { IMAGE_LINK_URL } from '../../../../tokens';
import { Select, Store } from '@ngxs/store';
import { LandingStoreSelectors } from '../../../../store/landing-store/landing-store.selectors';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../../../../shared/types';
import { QueryMovies } from '../../../../store/landing-store/landing-store.actions';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrls: [ './landing-slider.component.scss' ],
})
export class LandingSliderComponent implements OnInit, OnDestroy {
  @Select(LandingStoreSelectors.movies)
  movies$!: Observable<Array<Movie>>;
  slides: Array<{image: string}> = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    @Inject(IMAGE_LINK_URL) readonly posterUrl: string,
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new QueryMovies());
    this.movies$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(data => {
      this.slides = data.map(item =>  ({
        image: `${this.posterUrl}/${item.poster_path}`
      }));
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onChange($event: number) {
    console.log($event);
  }
}
