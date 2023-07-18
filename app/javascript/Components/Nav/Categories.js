import React from 'react';
import CategoryLink from './CategoryLink.js';

function Categories() {
  const categories = ['1','2','3'];
  return (
    <nav>
      <ul className="categories">
        { 
          categories.map((category) => (
            <CategoryLink
              key={category.name}
              selectedCategory={category[0]}
              name={category}
            />
          ))
        }
      </ul>
    </nav>
  );
};

export default Categories;