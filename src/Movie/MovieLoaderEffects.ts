/**
 * Effects from the MovieLoader events
 */

import Vue from 'vue';

import { MovieContract } from './interfaces';
import { MovieData } from '../MovieLoader/interfaces';

export default function useMovieLoaderEffects(
  acter: Vue,
  $this: MovieContract
): void {
  function movieDataLoaded(movieData: MovieData): void {
    $this.updateMovieData({ ...movieData });
  }

  acter.$on(`MovieLoader.movieDataLoaded:${$this.key.value}`, movieDataLoaded);
}
