import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); // Har safar `favorites` o‘zgarsa, saqlaymiz

  const toggleFavorite = (product) => {
    setFavorites((prev) => 
      prev.some((fav) => fav.id === product.id)
        ? prev.filter((fav) => fav.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <Context.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
export const useStateValue = () => useContext(Context);
