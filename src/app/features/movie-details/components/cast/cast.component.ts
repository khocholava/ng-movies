import { Component, Inject, Input, OnInit } from '@angular/core';
import { MovieCast } from '../../../../shared/types';
import { IMAGE_LINK_URL } from '../../../../tokens';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: [ './cast.component.scss' ],
})
export class CastComponent implements OnInit {
  @Input() cast!: Array<MovieCast>;

  constructor(
    @Inject(IMAGE_LINK_URL) readonly posterUrl: string,
  ) {
  }

  ngOnInit(): void {
  }

}
