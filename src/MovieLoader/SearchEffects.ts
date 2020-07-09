/**
 * Effects from the Search events
 */

import Vue from 'vue';

import { MovieLoaderContract } from './interfaces';

export default function useSearchEffects(
  acter: Vue,
  $this: MovieLoaderContract
): void {
  function searchInitialized(): void {
    $this.initializeLoader();
  }

  function searchStarted(searchText: string): void {
    $this.fetchMovies(searchText);
  }

  acter.$on('Search.searchInitialized', searchInitialized);
  acter.$on('Search.searchStarted', searchStarted);
}
