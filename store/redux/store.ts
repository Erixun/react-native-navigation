import { configureStore, createSlice } from '@reduxjs/toolkit';
import { favoritesReducer } from './favoritesSlice';

const store = configureStore({
  reducer: {
    //these are the different 'slices of data' for the store
    favorites: favoritesReducer,
  },
});

export default store;
