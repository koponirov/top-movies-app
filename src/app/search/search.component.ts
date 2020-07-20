import { Component, OnInit } from '@angular/core';
import {fromEvent, Observable, Subject, Subscription} from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { MovieService } from '../services/movie.service';
import {Movie} from '../interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  findedMovies: Movie[];



  constructor(private movieService: MovieService) {}

  ngOnInit(): void {

  }
}


// export class SearchComponent implements OnInit {
//   movies$: Observable<any>;
//   private searchTerms = new Subject<string>();
//
//   constructor(private movieService: MovieService) {}
//
//   // Push a search term into the observable stream.
//   search(term: string): void {
//     this.searchTerms.next(term);
//   }
//
//   ngOnInit(): void {
//     this.movies$ = this.searchTerms.pipe(
//       // wait 300ms after each keystroke before considering the term
//       debounceTime(300),
//
//       // ignore new term if same as previous term
//       distinctUntilChanged(),
//
//       // switch to new search observable each time the term changes
//       switchMap((term: string) => this.movieService.getSearchMovies(term)),
//     );
//     console.log(this.movies$);
//   }
// }
