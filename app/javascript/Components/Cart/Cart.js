import React from 'react';
import { useSelector } from 'react-redux';
import './cart.css';
import CartContent from './CartContent';

const Cart = ({page}) => {
  const {cart} = useSelector((state) => state.cart);

  if (Object.keys(cart).length < 1) {
    return (
      <div
        className={`'cart-is-empty-fullscreen'}`}
      >
        Cart Empty
      </div>
    );
  } else {
    return <CartContent page={page} />;
  }
};

export default Cart;
