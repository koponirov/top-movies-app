import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private apiKey = '6f5ba37659cae1043cf443b3275de80e';

  private lang = 'en-US';

  private baseUrl = 'https://api.themoviedb.org/3/';

  private topMoviesUrl = 'movie/top_rated';



  getTopMovies(page: number) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.lang)
      .set('page', page.toString());

    return this.http.get(`${this.baseUrl}${this.topMoviesUrl}`, { params });
  }

  getMovieDetails(id) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.lang);

    return this.http.get(`${this.baseUrl}movie/${id.toString()}`, { params });
  }
}
