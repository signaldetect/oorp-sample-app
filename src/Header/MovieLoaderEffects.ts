/**
 * Effects from the MovieLoader events
 */

import Vue from 'vue';

import { HeaderContract } from './interfaces';

export default function useMovieLoaderEffects(
  acter: Vue,
  $this: HeaderContract
): void {
  function imdbIdListLoaded(imdbIdList: string[]): void {
    $this.updateMovieCount(imdbIdList.length);
  }

  acter.$on('MovieLoader.imdbIdListLoaded', imdbIdListLoaded);
}
