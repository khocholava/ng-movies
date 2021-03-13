import { Component, Inject, Input, OnInit } from '@angular/core';
import { DictionaryType, Movie } from '../../../../shared/types';
import { IMAGE_LINK_URL } from '../../../../tokens';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: [ './movie-overview.component.scss' ],
})
export class MovieOverviewComponent implements OnInit {
  @Input() movie!: Movie;

  get movieGenres() {
    return this.movie.genres as Array<DictionaryType>;
  }
  constructor(
    @Inject(IMAGE_LINK_URL) readonly imageLink: string
  ) {
  }

  ngOnInit(): void {
  }

}
