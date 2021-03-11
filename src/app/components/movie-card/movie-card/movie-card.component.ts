import { Component, Inject, Input, OnInit } from '@angular/core';
import { Movie } from '../../../shared/types';
import { IMAGE_LINK_URL } from '../../../tokens';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: [ './movie-card.component.scss' ],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(
    @Inject(IMAGE_LINK_URL) readonly posterUrl: string,
  ) {
  }

  ngOnInit(): void {
  }

  rating(movie: Movie) {
    return Array(Math.floor(movie.vote_average / 2)).fill(0);
  }
}
