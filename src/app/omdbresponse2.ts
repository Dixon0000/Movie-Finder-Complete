export interface MovieDetails {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IOMDBResponse2 {
  Search: MovieDetails[];
  totalResults: string;
  Response: string;
  Error?: string;
}
