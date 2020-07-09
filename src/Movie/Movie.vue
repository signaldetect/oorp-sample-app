<template>
  <div v-if="movieData.imdbId" class="movie">
    <h2>{{ movieData.title }}</h2>
    <div>
      <img width="200" :alt="altText" :src="movieData.poster" />
    </div>
    <p>{{ movieData.year }}</p>
  </div>
  <div v-else class="slot"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  defineComponent,
  ref,
  computed,
  getCurrentInstance
} from '@vue/composition-api';

import { MovieContract } from './interfaces';
import { MovieData } from '../MovieLoader/interfaces';
import useMovieLoaderEffects from './MovieLoaderEffects';

export default defineComponent({
  name: 'Movie',
  props: {
    acter: { type: Vue, required: true }
  },
  setup({ acter }: { acter: Vue }): MovieContract {
    const _key = ref<string>(getCurrentInstance()?.$vnode.key);

    const _movieData = ref<MovieData>({
      imdbId: '--',
      title: '--',
      poster: '--',
      year: '--'
    });

    const key = computed(() => _key.value);
    const movieData = computed(() => _movieData.value);
    const altText = computed(
      () => `The movie titled: ${_movieData.value.title}`
    );

    function updateMovieData(movieData: MovieData): void {
      _movieData.value = movieData;
    }

    const $this: MovieContract = {
      key,
      movieData,
      altText,
      updateMovieData
    };

    useMovieLoaderEffects(acter, $this);

    return $this;
  }
});
</script>

<style>
.slot {
}
</style>
