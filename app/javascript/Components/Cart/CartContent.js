import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CartProduct from './CartProduct';


const CartPage = ({page}) => {
  const navigate = useNavigate();
  const {cart} = useSelector((state) => state.cart);

  const getToTalCart = () => {
    let count = 0;
    Object.values(cart).forEach((cartItem) => {
      count +=  cartItem.product.price * cartItem.quantity;
    });
    return count;
  };

  const getCartTotalQuantity = () => {
    let count = 0;
    Object.values(cart).forEach((cartItem) => {
      count += cartItem.quantity;
    });
    return count;
  };

  const displayCartProducts = () => {
    return Object.values(cart).map((cartItem) => {
      console.log(cartItem);
      return (
        <CartProduct
          key={cartItem.product.id}
          product={cartItem.product}
          cartQuantity={cartItem.quantity}
        />
      );
    });
  };

  const goToCheckout = () => {
    navigate(`/cart/checkout`);
  }

  return (
    <>
      {page === 'mini' ? (
        <>
          <p className="header">
            <span className="title">
              <NavLink to={`/cart`}>
                View
              </NavLink>
            </span>
            <span className="count">{getCartTotalQuantity()} items</span>
          </p>
          {displayCartProducts()}
        </>
      ) : (
        <div className="cart-page-full">
          <h2 className="page-header2">Cart</h2>
          <hr />
          {displayCartProducts()}
        </div>
      )}
  
      <div className="cart-extra-details">
        {/* <p className="tax">
          <span className="text">Tax:</span>
          <span className="amount">
            22
          </span>
        </p> */}
  
        <p className="quantity">
          <span className="text">Qty:</span>
          <span className="amount">{getCartTotalQuantity()}</span>
        </p>
  
        <p className="cart-total">
          <span className="text">
            Total{page === 'full' && ':'}
          </span>
          <span className="amount">
            ₵
            {getToTalCart()}
          </span>
        </p>
  
        <div className="cart-buttons">
          {page === 'mini' && (
            <div className="d-flex-col view-bag-link">
              <NavLink to={`/cart`}>
                View Cart
              </NavLink>
            </div>
          )}
          <button type="button" className="checkout-btn" onClick={goToCheckout}>
            {/* {page === 'mini' ? 'CHECK OUT' : 'ORDER'} */}
            CHECK OUT
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;  
