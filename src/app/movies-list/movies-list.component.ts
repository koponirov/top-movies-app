import {Component, Input, OnInit} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  totalPages: number;
  page: number;
  movies: Movie[];

  ngOnInit() {
    this.page = 1;
    this.getTopMovies();
  }

  getTopMovies(): void {
    this.movieService.getTopMovies(this.page)
      .subscribe((response: any) => {
        this.movies = response.results;
        this.totalPages = response.total_pages;
      });
  }

  onPageIndexChanged(e): void {
    this.page = e ;
    this.getTopMovies();
  }



}
