import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Wishlist = () => {
    const { wishlist } = useContext(ShopContext);

    return (
        <div>
            <h2>Wishlist Kamu</h2>
            {wishlist.length === 0 ? (
                <p>Belum ada produk di wishlist.</p>
            ) : (
                wishlist.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Wishlist;
