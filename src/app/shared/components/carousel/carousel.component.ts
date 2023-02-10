import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Show } from '../../classes/show';
import { TvmazeService } from '../../services/tvmaze.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images!: any;
  shows!: Show[];
  responsiveOptions: any;

  @Input() genre!: string;

  constructor(
    private tvMazeApi: TvmazeService
  ) {
  }

  ngOnInit(): void {
    this.tvMazeApi.getShowsbyGenre(this.genre).subscribe(res => {
      this.shows = res.map(elm => {
        return elm.show as Show
      });
    });

  }
}