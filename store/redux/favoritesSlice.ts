import { createSlice } from '@reduxjs/toolkit';

type FavoriteAction = {
  type: string;
  payload: {
    id: string;
  };
};

type FavoritesState = {
  favorites: {
    mealIds: string[];
  };
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    mealIds: <string[]>[],
  },
  reducers: {
    //methods that are used to update the state
    addFavorite: (state, action: FavoriteAction) => {
      state.mealIds.push(action.payload.id);
    },
    removeFavorite: (state, action: FavoriteAction) => {
      state.mealIds = state.mealIds.filter(
        (mealId) => mealId !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export const selectFavoriteMealIds = (state: FavoritesState) =>
  state.favorites.mealIds;
