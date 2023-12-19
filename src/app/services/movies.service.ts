import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResponse } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(public http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'X-Api-Key': environment.MOVIE_API_KEY,
    }),
  };

  movies(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      `${environment.MOVIE_API_BASE_URL}/movie/popular?&language=it`,
      this.httpOptions
    );
  }
}
