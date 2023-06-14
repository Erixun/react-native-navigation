import { configureStore, createSlice } from '@reduxjs/toolkit';
import { favoritesReducer } from './favoritesSlice';

const store = configureStore({
  reducer: {
    // Reducers
    favorites: favoritesReducer,
  },
});

export default store;