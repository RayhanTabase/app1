import React, { useEffect, useRef } from 'react';
import './mini_cart.css';

const MiniCart = ({handleShowMiniCart,children}) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      if (event.target.className.includes('cartMenuBtn')) return;
      handleShowMiniCart();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div 
      className="display-mini-cart"
      ref={wrapperRef}
    >
      {children}
    </div>
  );
};

export default MiniCart;
