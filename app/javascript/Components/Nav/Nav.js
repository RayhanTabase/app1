import React from 'react';
import './Nav.css';
// import brandLogo from '../../assets/brand_icon.svg';
// import dropDown from '../../assets/drop_down.svg';
// import dropUp from '../../assets/drop_up.svg';
// import ChangeCurrencyMenu from './ChangeCurrencyMenu';

const Nav = () => {
  return (
    <navbar className="navbar">
      <div className="section1">
        {/* Items in the first section */}
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
      </div>
      <div className="section2">
        {/* Items in the second section */}
        <div className="item">Item 5</div>
      </div>
      <div className="section3">
        {/* Items in the third section */}
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
        <div className="item">Item 9</div>
      </div>
    </navbar>
  )
}

export default Nav;