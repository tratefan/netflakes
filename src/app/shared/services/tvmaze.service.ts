import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry } from 'rxjs';
import { Show } from '../classes/show';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {


  constructor(
    private httpClient: HttpClient
  ) {
  }

  getShows(keyword: string): Observable<Show[]> {
    return this.httpClient.get(`${environment.apiUrl}/search/shows?q=${keyword}`) as Observable<Show[]>;
  }

  getShow(showId: number): Observable<Show> {
    return this.httpClient.get(`${environment.apiUrl}/shows/${showId}`) as Observable<Show>;
  }

  getShowsbyGenre(keyword: string): Observable<Show[]> { // GENRE DOESNT EXIST
    return this.httpClient.get(`${environment.apiUrl}/search/shows?q=${keyword}`) as Observable<Show[]>;
  }
}
