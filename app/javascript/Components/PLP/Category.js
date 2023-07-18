import React from 'react';
import './category_page.css';
import ProductsIndex from './ProductsIndex';

const Category = () => {
  const scriptTag = document.getElementById('products-data');
  const products = JSON.parse(scriptTag.textContent);

  return (
    <>
      <div className="plp-content">
        <ProductsIndex products={products}/>
      </div>
    </>
  );
};

export default Category;
