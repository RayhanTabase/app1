import React, {useEffect, useState} from 'react';
import CategoryLink from './CategoryLink';
import "./Nav.css"

const NavLinks = () => {
  const [categories, setCategories] = useState([])

  const getCategories = async() => {
    const response = await fetch(`/categories`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
      }
    });
    const data = await response.json();
    console.log(data);
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const displayNavLinks = () => {
    return categories.map(category => (
      <CategoryLink
        key={category}
        category={category}
      />
    ));
  };

  const home = {name:'home'}

  return (
    <nav>
      {
        categories.length > 0 &&
        <ul className="navLinks d-flex">
          <CategoryLink
            key={home.name}
            category={home}
          />
          {displayNavLinks()}
        </ul>
      }
    </nav>
  );
};

export default NavLinks;
