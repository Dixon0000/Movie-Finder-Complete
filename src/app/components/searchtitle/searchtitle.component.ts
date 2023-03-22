import { Component } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { IOMDBResponse } from '../../omdbresponse';


@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {
  public movieName = '';
  public movieData: IOMDBResponse = {} as IOMDBResponse;
  public errorMessage: any;

  constructor(private _omdbService: OmdbApiService) {}

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

  setDefaultPoster() {
    this.movieData.Poster = 'assets/default-poster.jpg'; // set default image path
  }
}
