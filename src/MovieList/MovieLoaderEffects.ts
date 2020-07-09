/**
 * Effects from the MovieLoader events
 */

import Vue from 'vue';

import { MovieListContract } from './interfaces';

export default function useMovieLoaderEffects(
  acter: Vue,
  $this: MovieListContract
) {
  function imdbIdListLoaded(idList: string[]): void {
    $this.updateImdbIdList([...idList]);
  }

  acter.$on('MovieLoader.imdbIdListLoaded', imdbIdListLoaded);
}
