import React from 'react';
import Cart from '../Components/Cart/Cart';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const CartPage = () => {

  return (
    <>
      <Header />
      <Cart page="full" />
      <Footer />
    </>
  )
};

export default CartPage;
