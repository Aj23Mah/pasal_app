import React, { useContext } from 'react'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className='cart'>
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
        <button onClick={() => navigate("/payment")}> Checkout </button>
      </div>
      : <h2> Your Cart is Empty </h2> }
    </div>
  )
}
