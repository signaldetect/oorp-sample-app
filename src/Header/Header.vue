<template>
  <header class="app-header">
    <h2>Movies ({{ movieCount }})</h2>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent, ref, computed } from '@vue/composition-api';

import { HeaderContract } from './interfaces';
import useMovieLoaderEffects from './MovieLoaderEffects';

export default defineComponent({
  name: 'Header',
  props: {
    acter: { type: Vue, required: true }
  },
  setup({ acter }: { acter: Vue }): HeaderContract {
    const _movieCount = ref<number>(0);

    const movieCount = computed(() => _movieCount.value);

    function updateMovieCount(count: number): void {
      _movieCount.value = count;
    }

    const $this: HeaderContract = {
      movieCount,
      updateMovieCount
    };

    useMovieLoaderEffects(acter, $this);

    return $this;
  }
});
</script>
