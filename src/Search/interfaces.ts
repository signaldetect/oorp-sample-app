/**
 * Interfaces
 */

import { Ref } from '@vue/composition-api';

export interface InputEvent extends Event {
  target: HTMLInputElement;
}

export interface SearchContract {
  movieTitle: Readonly<Ref<Readonly<string>>>;
  initialize(): void;
  changeMovieTitle(event: InputEvent): void;
  startSearch(event: InputEvent): void;
}

export interface SearchEvents {
  searchInitialized(): void;
  searchStarted(searchText: string): void;
}
