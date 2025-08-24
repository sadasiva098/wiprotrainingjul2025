import { Injectable } from '@angular/core';
import { Imovie } from './imovie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Imovie[] = [
    { movieId: 1, movieName: 'Inception', language: 'English', imdbRating: 8.8 },
    { movieId: 2, movieName: '3 Idiots', language: 'Hindi', imdbRating: 8.4 },
    { movieId: 3, movieName: 'RRR', language: 'Telugu', imdbRating: 8.0 }
  ];

  // CRUD methods
  getMovies(): Imovie[] {
    return this.movies;
  }

  addMovie(movie: Imovie): void {
    this.movies.push(movie);
  }

  updateMovie(updated: Imovie): void {
    const index = this.movies.findIndex(m => m.movieId === updated.movieId);
    if (index !== -1) {
      this.movies[index] = updated;
    }
  }

  deleteMovie(movieId: number): void {
    this.movies = this.movies.filter(m => m.movieId !== movieId);
  }
}
