import { Component } from '@angular/core';
import { OmdbApiService } from '../../services/omdb-api.service';
import { IOMDBResponse2, MovieDetails } from '../../omdbresponse2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public movieName = '';
  public movieData: IOMDBResponse2 = {} as IOMDBResponse2;
  public currentPage = 1;
  public maxPages = 0;
  public errorMessage: any;

  constructor(private _omdbService: OmdbApiService) {}

  searchMovie(movieName: string): void {
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData = movieData;
        this.maxPages = Math.ceil(+this.movieData.totalResults / 10);
      },
      error => {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
      }
    );
  }

  nextPage(): void {
    if (this.currentPage < this.maxPages) {
      this.currentPage += 1;
      this.searchMovie(this.movieName);
      this.scrollToTop();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.searchMovie(this.movieName);
      this.scrollToTop();
    }
  }

  firstPage(): void {
    this.currentPage = 1;
    this.searchMovie(this.movieName);
    this.scrollToTop();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
