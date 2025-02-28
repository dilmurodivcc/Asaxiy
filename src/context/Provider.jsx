import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // `favorites` o‘zgarsa, localStorage-ga saqlash
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // `cart` o‘zgarsa, localStorage-ga saqlash
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === product.id)
        ? prev.filter((fav) => fav.id !== product.id)
        : [...prev, product]
    );
  };

  const toggleCart = (product) => {
    setCart((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id) // Agar bor bo‘lsa, o‘chirish
        : [...prev, product] // Agar yo‘q bo‘lsa, qo‘shish
    );
  };

  return (
    <Context.Provider value={{ favorites, toggleFavorite, cart, toggleCart }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
export const useStateValue = () => useContext(Context);
