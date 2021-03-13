import { Component, Inject, Input, OnInit } from '@angular/core';
import { Movie } from '../../types';
import { IMAGE_LINK_URL } from '../../../tokens';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: [ './movie-card.component.scss' ],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  isTvShow = false;

  constructor(
    @Inject(IMAGE_LINK_URL) readonly posterUrl: string,
    readonly router: Router,
  ) {
  }

  get movieGenre() {
    return this.movie.genres as Array<string>;
  }

  @Input()
  set tvShow(value: unknown) {
    this.isTvShow = true;
  }

  ngOnInit(): void {
  }

  rating(movie: Movie) {
    return Array(Math.floor(movie.vote_average / 2)).fill(0);
  }

  navigateToDetails(movie: Movie) {
    this.router.navigate([ '/movies', movie.id ]);
  }
}
