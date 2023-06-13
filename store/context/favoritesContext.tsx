import { createContext, useState } from 'react';

interface FavoritesContext {
  favoriteIds: any[];
  addFavorite: (favoriteId: any) => void;
  removeFavorite: (favoriteId: any) => void;
}

export const FavoritesContext = createContext({
  favoriteIds: [],
  addFavorite: (favoriteId: any) => {},
  removeFavorite: (favoriteId: any) => {},
});

function FavoritesContextProvider({ children }) {

  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavorite = (favoriteId: any) => {
    setFavoriteIds([...favoriteIds, favoriteId]);
  };

  const removeFavorite = (favoriteId: any) => {
    setFavoriteIds(favoriteIds.filter((id) => id !== favoriteId));
  };

  const value: FavoritesContext = {
    favoriteIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;