import React, {useEffect, useState} from 'react';
import { Breakpoint } from 'react-socks';
import './CategorySelect.css';

const CategorySelect = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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


  return (
    <div>
      <Breakpoint customQuery="(max-width: 768px)">
        <div className='container-hamburger'>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
            <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
            <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          </div>
          {isMenuOpen && (
            <div className="category-menu">
              <div className="overlay" onClick={toggleMenu} />
              <div className="menu-content">
                <ul>
                  {categories.map((category)=> 
                    <li>{category.name}</li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
        <br/>
      </Breakpoint>
    </div>
  );
};

export default CategorySelect;
