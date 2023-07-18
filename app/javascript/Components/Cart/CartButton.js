import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import emptyCart from '../../assets/empty_cart.svg';
import Cart from './Cart';
import './mini_cart.css';
import MiniCart from './MiniCart';

const CartButton = ({noMini}) => {
  const navigate = useNavigate();
  const {cart} = useSelector((state) => state.cart);
  const [showMiniCart, setShowMiniCart] = useState(false);

  const handleShowMiniCart = () => {
    if(noMini){
      navigate(`/cart`);
    }else{
      setShowMiniCart((prev)=> !prev);
    }
  }

  const getCartTotalQuantity = () => {
    let count = 0;
    Object.values(cart).forEach((cartItem) => {
      count += cartItem.quantity;
    });
    return count;
  };

  return (
    <>
      <button
        type="button"
        className="btn-colorless cartMenuBtn"
        onClick={handleShowMiniCart}
      >
        <p className="bullet cartQty">
          {getCartTotalQuantity()}
        </p>
        <img className="cartMenuBtn" src={emptyCart} alt="empty cart" />
      </button>
      {showMiniCart && (
        <MiniCart handleShowMiniCart={handleShowMiniCart}>
          <Cart page="mini" />
        </MiniCart>
      )} 
    </>
  );
};

export default CartButton;
