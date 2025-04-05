import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, addToWishlist, cart, wishlist } = useContext(AppContext);

  useEffect(() => {
    // Fetch produk dari Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Gagal mengambil data:", error));
  }, []);

  // Optional: Cek apakah produk sudah ada di wishlist/cart
  const isInCart = (productId) => cart?.some(item => item.id === productId);
  const isInWishlist = (productId) => wishlist?.some(item => item.id === productId);

  return (
    <div className="container">
      <h2>Produk Tersedia</h2>
      {products && products.length > 0 ? (
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? "Sudah di Cart" : "Tambah ke Cart"}
              </button>
              <button
                onClick={() => addToWishlist(product)}
                disabled={isInWishlist(product.id)}
              >
                {isInWishlist(product.id) ? "Sudah di Wishlist" : "Tambah ke Wishlist"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Memuat produk...</p>
      )}
    </div>
  );
};

export default ShopPage;
