import React from 'react';
import { Link } from 'react-router-dom';

const Navbar1Items = ({ category }) => {

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="category-link-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={category.link} className="category-link">
        {category.name}
      </Link>
    </div>
  );
};

export default Navbar1Items;
