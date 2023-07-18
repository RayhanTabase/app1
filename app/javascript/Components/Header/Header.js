import React from 'react';
import Banner from '../Banner/Banner';
import NavLinks from '../Navlink/NavLinks';
import SearchProfile from '../SearchProfile/SearchProfile';

function Header() {
  return (
    <>
      <Banner />
      <SearchProfile />
      <NavLinks />
    </>
  );
}

export default Header;
