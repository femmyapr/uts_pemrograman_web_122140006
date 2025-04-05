import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>Rp {product.price}</p>
      <button>Tambah ke Keranjang</button>
    </div>
  );
};

export default ProductCard;
