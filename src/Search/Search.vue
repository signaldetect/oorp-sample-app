<template>
  <form class="search">
    <input type="text" :value="movieTitle" @keyup="changeMovieTitle" />
    <input type="button" value="SEARCH" @click="startSearch" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent, ref, computed } from '@vue/composition-api';

import { InputEvent, SearchContract } from './interfaces';
import useAppEffects from './AppEffects';

export default defineComponent({
  name: 'Search',
  props: {
    acter: { type: Vue, required: true }
  },
  setup({ acter }: { acter: Vue }): SearchContract {
    const _movieTitle = ref<string>('');

    const movieTitle = computed(() => _movieTitle.value);

    function initialize(): void {
      _movieTitle.value = 'Joker';

      acter.$emit('Search.searchInitialized');
    }

    function changeMovieTitle(event: InputEvent): void {
      _movieTitle.value = event.target.value;
    }

    function startSearch(): void {
      acter.$emit('Search.searchStarted', _movieTitle.value);
    }

    const $this: SearchContract = {
      initialize,
      movieTitle,
      changeMovieTitle,
      startSearch
    };

    useAppEffects(acter, $this);

    return $this;
  }
});
</script>
