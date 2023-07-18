import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CatNavItem = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

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
      {
        isHovered && category.subcategories.length > 0 ? (
        <div className="dropdown-panel">
          {category.subcategories.map((subcategory) => (
            <Link key={subcategory.name} to={subcategory.link} className="dropdown-item">
              {subcategory.name}
            </Link>
          ))
         
        }
        </div>
        )
        :
        false
    }
    </div>
  );
};

export default CatNavItem;
