import React from 'react';
import './Banner.css'; // Import the CSS file for styling
import SocialMedia from '../SocialMedia/SocialMedia'; // Component dependency

const Banner = () => {
  return (
    <div className="banner">
      <div className="section1">
        <p>Chat us if you don’t find what you looking for.</p>
      </div>
      <div className="section2">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Banner;
