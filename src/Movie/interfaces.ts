/**
 * Interfaces
 */

import { Ref } from '@vue/composition-api';

import { MovieData } from '../MovieLoader/interfaces';

export interface MovieContract {
  key: Readonly<Ref<Readonly<string>>>;
  movieData: Readonly<Ref<Readonly<MovieData>>>;
  altText: Readonly<Ref<Readonly<string>>>;
  updateMovieData(movieData: MovieData): void;
}
