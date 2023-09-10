import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="product-items" />
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
  );
};
