import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
// import Category from '../Components/PLP/Category';

function Home() {
  console.log('homepage');
  return (
    <>
      <Header />
      <Carousel />
      {/* <Category /> */}
      <Footer />
    </>
  );
}

export default Home;
