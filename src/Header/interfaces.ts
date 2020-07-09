/**
 * Interfaces
 */

import { Ref } from '@vue/composition-api';

export interface HeaderContract {
  movieCount: Readonly<Ref<Readonly<number>>>;
  updateMovieCount(count: number): void;
}
