/**
 * Interfaces
 */

export interface MovieLoaderContract {
  initializeLoader(): void;
  fetchMovies(searchText: string): void;
  loadMovieData(): void;
}

export interface MovieLoaderEvents {
  imdbIdListLoaded(imdbIdList: string[]): void;
  movieDataLoaded(movieData: MovieData): void;
}

export interface RawData {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}

export interface MovieData {
  imdbId: string;
  title: string;
  poster: string;
  year: string;
}
