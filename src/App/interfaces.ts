/**
 * Interfaces
 */

import Vue from 'vue';

import { MovieLoaderContract } from '../MovieLoader/interfaces';

export interface AppContract {
  acter: Vue;
  movieLoader: MovieLoaderContract;
}

export interface AppEvents {
  appLaunched(): void;
}
