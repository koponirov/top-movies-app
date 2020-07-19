import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../services/movie.service';
import {MovieDetailed} from '../interface';

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

  ngOnInit() {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.movieService.getMovieDetails(id)
      .subscribe(response => this.movie = response);
  }
}
