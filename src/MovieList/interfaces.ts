/**
 * Interfaces
 */

import { Ref } from '@vue/composition-api';

export interface MovieListContract {
  imdbIdList: Readonly<Ref<Readonly<string[]>>>;
  updateImdbIdList(idList: string[]): void;
}

export interface MovieListEvents {
  slotListPrepared(): void;
}
