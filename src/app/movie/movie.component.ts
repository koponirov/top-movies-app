import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../services/movie.service';
import {Movie, MovieDetailed} from '../interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService) { }

    movie: MovieDetailed;
    similar: Movie[];
    disabled: boolean;

  ngOnInit() {
    this.disabled = false;
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.movieService.getMovieDetails(id)
      .subscribe(response => this.movie = response);
    this.movieService.getSimilar(id)
      .subscribe(response => this.similar = response.results);
    this.isIncluded(id);
  }

  addMovie(movie: MovieDetailed) {
    this.movieService.addMovieToCollection(movie);
    this.setDisabled(true);
  }

  setDisabled(flag: boolean) {
    this.disabled = flag;
  }

  isIncluded(id: number) {
    if (this.movieService.getCollection().find( m => m.id === id)) {
      this.disabled = true;
    } else {this.disabled = false; }
  }
}
