/**
 * MovieLoader
 */

import Vue from 'vue';
import { ref } from '@vue/composition-api';

import { MovieLoaderContract, RawData, MovieData } from './interfaces';
import useSearchEffects from './SearchEffects';
import useMovieListEffects from './MovieListEffects';

export default function MovieLoader(acter: Vue): MovieLoaderContract {
  const _apiKey = ref<string>('');
  const _dataList = ref<RawData[]>([]);

  function _loadImdbIdList(): void {
    const imdbIdList: string[] = _dataList.value.map(
      (data: RawData) => data.imdbID
    );
    acter.$emit('MovieLoader.imdbIdListLoaded', imdbIdList);
  }

  function initializeLoader(): void {
    _apiKey.value = 'a5549d08';
  }

  function fetchMovies(searchText: string): void {
    const apiHost = 'https://www.omdbapi.com';
    const apiUrl = `${apiHost}/?s=${searchText}&apikey=${_apiKey.value}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(jsonResponse => {
        _dataList.value =
          jsonResponse.Response === 'True' ? jsonResponse.Search : [];

        _loadImdbIdList();
      });
  }

  function loadMovieData(): void {
    for (const data of _dataList.value) {
      const imdbId = data.imdbID;
      const movieData: MovieData = {
        imdbId: imdbId,
        title: data.Title,
        poster: data.Poster,
        year: data.Year
      };
      acter.$emit(`MovieLoader.movieDataLoaded:${imdbId}`, movieData);
    }
  }

  const $this: MovieLoaderContract = {
    initializeLoader,
    fetchMovies,
    loadMovieData
  };

  useSearchEffects(acter, $this);
  useMovieListEffects(acter, $this);

  return $this;
}
