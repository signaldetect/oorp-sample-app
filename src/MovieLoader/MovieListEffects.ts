/**
 * Effects from the MovieList events
 */

import Vue from 'vue';

import { MovieLoaderContract } from './interfaces';

export default function useMovieListEffects(
  acter: Vue,
  $this: MovieLoaderContract
): void {
  function slotListPrepared(): void {
    $this.loadMovieData();
  }

  acter.$on('MovieList.slotListPrepared', slotListPrepared);
}
