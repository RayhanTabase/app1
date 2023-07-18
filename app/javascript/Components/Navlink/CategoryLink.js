import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import {base} from '../../util/apiRoutes'

const CategoryLink = ({category}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { category:cat } = useParams();
  let active = category.name === cat || false;
  if (!cat && category.name === 'home') active = true;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <li className={`${active && 'active-link'} nav-link`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        category.name === "home" ?
        <NavLink
          to={`${base}`}
          className="nav-btn"
        >
          {category.name}
        </NavLink>
        :
        <NavLink
          to={`${base}/products/category/${category.name}/1/return`}
          className="nav-btn"
        >
          {category.name}
        </NavLink>
      }
    </li>
  );
};

export default CategoryLink;
