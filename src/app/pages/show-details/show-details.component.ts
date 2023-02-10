import { TvmazeService } from './../../shared/services/tvmaze.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/shared/classes/show';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {

  showId!: number;
  show!: Show | undefined;
  constructor(
    private route: ActivatedRoute,
    private tvMazeApi: TvmazeService
  ) {
    this.route.params.subscribe(params => {
      this.showId = params['id'];
    });

    this.tvMazeApi.getShow(this.showId).subscribe((res) => {
      this.show = res;
      console.log('show: ', this.show);
    });
  }

  ngOnInit(): void {
  }

}
