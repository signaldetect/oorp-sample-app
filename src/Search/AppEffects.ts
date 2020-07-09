/**
 * Effects from the App events
 */

import Vue from 'vue';

import { SearchContract } from './interfaces';

export default function useAppEffects(acter: Vue, $this: SearchContract) {
  function appLaunched() {
    $this.initialize();
  }

  acter.$on('App.appLaunched', appLaunched);
}
