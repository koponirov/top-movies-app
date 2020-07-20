import {EventEmitter, Injectable, Output} from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap} from 'rxjs/operators';
import {HttpService} from './http.service';
import {MovieDetailed} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  @Output()
  public addToCollection: EventEmitter<MovieDetailed> = new EventEmitter<MovieDetailed>();
  public collection: MovieDetailed[] = [];

  constructor(private http: HttpService) { }

  getTopMovies(page): Observable<any> {
    return this.http.getTopMovies(page);
  }
  getMovieDetails(id): Observable<any> {
    return this.http.getMovieDetails(id);
  }
  getSimilar(id): Observable<any> {
    return this.http.getSimilar(id);
  }

  addMovieToCollection (movie: MovieDetailed) {
    this.addToCollection.emit(movie);
    if (this.collection.find( m => m.id === movie.id)) { return; }
    this.collection.push(movie);
  }

  getCollection() {
    return this.collection;
  }

  getSearchMovies(term: string): Observable<any> {
      if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.search(term).pipe(
      tap(_ => console.log(`search "${term}"`)),
    );
  }
}
