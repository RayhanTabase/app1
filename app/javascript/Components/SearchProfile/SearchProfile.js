import React from 'react';
import { Breakpoint } from 'react-socks';

import './SearchProfile.css';
import CartButton from '../Cart/CartButton';
import Profile from '../Profile/Profile';
import Search from '../Search/Search';
import CategorySelect from '../CategorySelect/CategorySelect';

const SearchProfile = () => {
  const cart = [];
  const categories = [];

  return (
    <div className='search-profile-container'>
      <Breakpoint customQuery="(max-width: 768px)">
        <div className="search-profile-menu-fixed">
          <div className='search-profile-menu-fixed-item'>
            <Profile />
          </div>
          <div className='search-profile-menu-fixed-item'>
            <Search />
          </div>
          <div className='search-profile-menu-fixed-item'>
            <CartButton noMini={true} />
          </div>
        </div>
        <CategorySelect />
      </Breakpoint>
      <Breakpoint customQuery="(min-width: 768px)">
        <div className="search-profile-menu-full">
          <CategorySelect />
          <Search />
          <Profile />
          <CartButton noMini={false} />
        </div>
      </Breakpoint>
    </div>
  );
};

export default SearchProfile;
