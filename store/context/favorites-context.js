import { createContext } from "react";

const initialContext = {
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
};

export const FavoritesContext = createContext(initialContext);

function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
