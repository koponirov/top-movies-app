import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import set = Reflect.set;
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpService) { }

  getTopMovies(page): Observable<any> {
    return this.http.getTopMovies(page);
  }
  getMovieDetails(id): Observable<any> {
    return this.http.getMovieDetails(id)
  }
}
