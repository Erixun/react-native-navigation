import { createContext, useState } from 'react';

export const FavoritesContext = createContext<FavoritesContextType>({
  favoriteIds: [],
  addFavorite: (favoriteId: string) => {},
  updateFavorite: (favoriteId: string) => {},
  removeFavorite: (favoriteId: string) => {},
});

export const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favoriteIds, setFavoritesIds] = useState<string[]>([]);

  const addFavorite = (favoriteId: string) => {
    setFavoritesIds((currentFavoriteIds: string[]) => [
      ...currentFavoriteIds,
      favoriteId,
    ]);
  };

  const updateFavorite = (favoriteId: string) => {
    setFavoritesIds((currentFavoriteIds) => {
      const index = currentFavoriteIds.findIndex(
        (currentFavoriteId) => currentFavoriteId === favoriteId
      );
      const updatedFavoriteIds = [...currentFavoriteIds];
      updatedFavoriteIds[index] = favoriteId;
      return updatedFavoriteIds;
    });
  };

  const removeFavorite = (favoriteId: string) => {
    setFavoritesIds((currentFavoriteIds) =>
      currentFavoriteIds.filter(
        (currentFavoriteId) => currentFavoriteId !== favoriteId
      )
    );
  };

  const contextValue = {
    favoriteIds,
    addFavorite,
    updateFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export type FavoritesContextType = {
  favoriteIds: string[];
  addFavorite: (favoriteId: string) => void;
  updateFavorite: (favoriteId: string) => void;
  removeFavorite: (favoriteId: string) => void;
};

type FavoritesContextMethod = (favoriteId: string) => void;

type FavoritesContextProviderProps = {
  children: React.ReactNode;
};
