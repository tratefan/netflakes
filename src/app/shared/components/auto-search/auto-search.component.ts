import { TvmazeService } from './../../services/tvmaze.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Show } from '../../classes/show';
import { Router } from '@angular/router';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'auto-search',
  templateUrl: './auto-search.component.html',
  styleUrls: ['./auto-search.component.scss']
})
export class AutoSearchComponent implements OnInit, AfterViewInit {
  movieCtrl = new FormControl();

  isLoading: boolean = false;
  filteredMovies: Observable<Show[]> = new Observable();


  constructor(
    private tvMazeApi: TvmazeService,
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.filteredMovies = this.movieCtrl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      tap((res) => console.log(res)),
      switchMap(val => {
        return this._filter(val || '')
      }),
    )
  }

  showDetails(showId?: number) {
    this.router.navigate(['/pages/show-details', showId]);
  };

  private _filter(value: string): Observable<Show[]> {
    const filterValue = value.toLowerCase();

    return this.tvMazeApi.getShows(filterValue)
      .pipe(
        map((shows) => {
          const showsSlice: Show[] = shows.slice(0, 6);
          return showsSlice.map(show => show.show) as unknown as Show[];
        }),
      );
  }

  ngOnInit(): void {
  }


}
