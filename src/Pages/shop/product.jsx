import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { motion } from "framer-motion";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <>
      <div className="product">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={productImage}
          style={{
            aspectRatio: "1 / 1",
            height: "200px",
            width: "200px",
          }}
          alt="product-items"
          className="bg-center object-scale-down object-center"
        />
        <p className="font-semibold text-center font-xl">{productName}</p>
        <div className="flex justify-around m-2">
          <p>price:</p>
          <p> Rs.{price} </p>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 rounded"
          onClick={() => addToCart(id)}
        >
          Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </>
  );
};
