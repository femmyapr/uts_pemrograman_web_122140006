import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Keranjang kamu kosong.</p>
      ) : (
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cart.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                  className="w-mx-auto aspect-[3/4] object-contain bg-white p-4"
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{product.title}</h4>
                <p className="text-gray-700 font-medium">${product.price}</p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Hapus dari Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
