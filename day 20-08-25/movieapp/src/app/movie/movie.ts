import { Component } from '@angular/core';
import { Imovie } from '../imovie';
import { MovieService } from '../movie';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies: Imovie[] = [];
  newMovie: Imovie = { movieId: 0, movieName: '', language: '', imdbRating: 0 };
  editing: boolean = false;

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovies();
  }

  saveMovie() {
    if (!this.editing) {
      this.movieService.addMovie({ ...this.newMovie });
    } else {
      this.movieService.updateMovie({ ...this.newMovie });
      this.editing = false;
    }
    this.movies = this.movieService.getMovies();
    this.resetForm();
  }

  editMovie(movie: Imovie) {
    this.newMovie = { ...movie };
    this.editing = true;
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id);
    this.movies = this.movieService.getMovies();
  }

  resetForm() {
    this.newMovie = { movieId: 0, movieName: '', language: '', imdbRating: 0 };
  }
}
