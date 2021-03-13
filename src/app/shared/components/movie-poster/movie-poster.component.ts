import { Component, Inject, Input, OnInit } from '@angular/core';
import { IMAGE_LINK_URL } from '../../../tokens';
import { Movie } from '../../types';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: [ './movie-poster.component.scss' ],
})
export class MoviePosterComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(
    @Inject(IMAGE_LINK_URL) readonly posterUrl: string,
  ) {
  }

  ngOnInit(): void {
  }

}
