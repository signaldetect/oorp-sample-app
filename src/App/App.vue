<template>
  <div class="app">
    <Header :acter="acter" />
    <Search :acter="acter" />
    <p class="app-intro">Sharing a few of our favourite movies</p>
    <MovieList :acter="acter" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent, onMounted } from '@vue/composition-api';

import { AppContract } from './interfaces';
import Header from '../Header/Header.vue';
import Search from '../Search/Search.vue';
import MovieList from '../MovieList/MovieList.vue';
import MovieLoader from '../MovieLoader/MovieLoader';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Search,
    MovieList
  },
  setup(): AppContract {
    const acter = new Vue();
    const movieLoader = MovieLoader(acter);

    onMounted(() => {
      acter.$emit('App.appLaunched');
    });

    const $this: AppContract = {
      acter,
      movieLoader
    };

    return $this;
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
