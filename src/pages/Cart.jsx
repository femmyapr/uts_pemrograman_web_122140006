import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
    const { cart } = useContext(ShopContext);

    return (
        <div>
            <h2>Keranjang Kamu</h2>
            {cart.length === 0 ? (
                <p>Keranjang kosong.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                    </div>
                ))
            )}
        </div>
    );
};

<button onClick={() => removeFromCart(product.id)} className="btn btn-danger">
  Hapus
</button>

export default Cart;
