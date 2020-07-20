import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieDetailed} from '../interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  collection: MovieDetailed[];

  ngOnInit() {
    this.collection = [];
      this.getCollection();
  }

    getCollection() {
      this.collection = this.movieService.getCollection();
    }

  deleteMovie(movie: MovieDetailed): void {

    this.collection = this.collection.filter( m => {
      debugger;
      return m.id !== movie.id; });
  }

}
