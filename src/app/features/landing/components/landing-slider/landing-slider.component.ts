import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-slider',
  templateUrl: './landing-slider.component.html',
  styleUrls: [ './landing-slider.component.scss' ],
})
export class LandingSliderComponent implements OnInit {
  slides = [
    { 'image': 'https://cdn.vox-cdn.com/thumbor/Yp5JkCg25gdpjNQOjx2p2JoeRW0=/0x0:1774x2732/1200x675/filters:focal(530x876:812x1158)/cdn.vox-cdn.com/uploads/chorus_image/image/68930719/Screenshot_2021_03_08_at_10.06.34_AM.0.png' },
    { 'image': 'https://i0.wp.com/batman-news.com/wp-content/uploads/2020/07/Queen-Studios-Dark-Knight-Batman-1-3-Scale-Featured-01.jpg?resize=696%2C392&quality=80&strip=info&ssl=1' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange($event: number) {
    console.log($event);
  }
}
