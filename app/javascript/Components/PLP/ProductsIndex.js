import React from 'react';
import ProductCard from './ProductCard';
import './category_page.css';

const ProductsIndex = ({products}) => {

  const displayProducts = () => {
    return products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ));
  }

  return (
    <>
      {displayProducts()}
    </>
  )
}

export default ProductsIndex;
