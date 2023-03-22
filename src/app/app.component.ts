import { Component } from '@angular/core';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Finder';
  movieData: IOMDBResponse | undefined;
  errorMessage: any;

  constructor(private _omdbService: OmdbApiService) {}

   // Fetches movie details by movie name
  getMovieDetails(movieName: string): void {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        if (!this.movieData.Poster) {
          this.setDefaultPoster();
        }
      },
      error => {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
      }
    );
  }

   // Sets the default poster image if no poster is available
  setDefaultPoster() {
    if (this.movieData) {
      this.movieData.Poster = 'default-poster.jpg'; // set default image path
    }
  }
}
