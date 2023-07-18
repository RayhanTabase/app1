import React from 'react';
// import './Navbar1.css';
import Navbar1Items from './Navbar1Items';

const Navbar1 = () => {
  // Dummy data for categories and subcategories
  const categories = [
    {
      name: "Category 1", 
      link: "/category1",
    },
    {
      name: "Category 2",
      link: "/category3",
    },
  ];

  return (
    <nav className="category-nav">
        {categories.map((category, index) => (
          <Navbar1Items key={index} category={category} />
        ))}
    </nav>
  );
};

export default Navbar1;
