import React, { useContext } from 'react';
import { PRODUCTS } from '../../product';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, getTotalCartQuantity } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalQty = getTotalCartQuantity();

  const navigate = useNavigate(); // Define navigate here

  const handleCheckoutClick = () => {
    // Pass totalQty and totalAmount as state when navigating to the Checkout page
    navigate('/checkout', { state: { totalQty, totalAmount } });
  };

  return (
    <div className='cart pb-4'>
      <div className='cartTitle'>
        <h1> Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>
      
      {totalAmount > 0 ? 
      <div className='checkOut'>
        <p> Subtotal: RS.{totalAmount} </p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button onClick={handleCheckoutClick}> Checkout </button>
      </div>
      : <h2> Your Cart is Empty </h2> }
    </div>
  );
};
