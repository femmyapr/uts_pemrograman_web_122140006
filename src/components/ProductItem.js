import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProductItem = ({ product }) => {
    const { addToWishlist, addToCart } = useContext(AppContext);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
