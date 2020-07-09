/**
 * Effects from the MovieList events
 */

import Vue from 'vue';

import { MovieLoaderContract } from './interfaces';

export default function useMovieListEffects(
  acter: Vue,
  $this: MovieLoaderContract
): void {
  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  function slotListPrepared(): void {
    sleep(5000).then(() => {
      $this.loadMovieData();
    });
  }

  acter.$on('MovieList.slotListPrepared', slotListPrepared);
}
