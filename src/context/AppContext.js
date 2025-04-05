import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Tambah ke Cart
  const addToCart = (product) => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, product]);
    }
  };

  // Hapus dari Cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Tambah ke Wishlist
  const addToWishlist = (product) => {
    const alreadyInWishlist = wishlist.find((item) => item.id === product.id);
    if (!alreadyInWishlist) {
      setWishlist([...wishlist, product]);
    }
  };

  // Hapus dari Wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((item) => item.id !== productId));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
