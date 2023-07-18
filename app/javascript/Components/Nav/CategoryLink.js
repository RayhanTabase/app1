import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';


function CategoryLink({ name, selectedCategory }) {
    return (
      <li
        className={`${name === selectedCategory && 'active-link'} nav-link`}
      >
      <NavLink
        to={`/`}
        className="nav-btn"
      >
        {name}
      </NavLink>
      </li>
    );
};

export default CategoryLink;