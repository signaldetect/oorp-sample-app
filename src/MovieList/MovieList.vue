<template>
  <div class="movie-list">
    <Movie v-for="imdbId in imdbIdList" :key="imdbId" :acter="acter" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  defineComponent,
  ref,
  computed,
  onUpdated
} from '@vue/composition-api';

import { MovieListContract } from './interfaces';
import useMovieLoaderEffects from './MovieLoaderEffects';
import Movie from '../Movie/Movie.vue';

export default defineComponent({
  name: 'MovieList',
  components: { Movie },
  props: {
    acter: { type: Vue, required: true }
  },
  setup({ acter }: { acter: Vue }): MovieListContract {
    const _imdbIdList = ref<string[]>([]);

    const imdbIdList = computed(() => _imdbIdList.value);

    onUpdated(() => {
      acter.$emit('MovieList.slotListPrepared');
    });

    function updateImdbIdList(idList: string[]): void {
      _imdbIdList.value = idList;
    }

    const $this: MovieListContract = {
      imdbIdList,
      updateImdbIdList
    };

    useMovieLoaderEffects(acter, $this);

    return $this;
  }
});
</script>
