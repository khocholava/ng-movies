import { Component, Inject, Input, OnInit } from '@angular/core';
import { MovieCast } from '../../types';
import { IMAGE_LINK_URL } from '../../../tokens';

@Component({
  selector: 'app-cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.scss']
})
export class CastCardComponent implements OnInit {
  @Input() cast!: MovieCast;
  constructor(
    @Inject(IMAGE_LINK_URL) readonly posterUrl: string,
  ) { }

  ngOnInit(): void {
  }

}
