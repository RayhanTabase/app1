import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header/Header';
import ProductsIndex from '../Components/PLP/ProductsIndex';
import './Results.css'
import Footer from '../Components/Footer/Footer';
import { base } from '../util/apiRoutes';

function Results() {
  const { query, category, page } = useParams();
  const [pageNum, setPage] = useState(page);
  const [products, setProducts] = useState('loading');

  console.log(query, category, pageNum);

  const searchProducts = async() => {
    if (!category && !query) return;
    if (category) {
      const response = await fetch(`${base}/products/category/${category}/${pageNum}/`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
        }
      });
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    else {
      const response = await fetch(`${base}/products/search/${query}/${pageNum}/`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
        }
      });
      const data = await response.json();
      console.log(data);
      setProducts(data || []);
    }
  }

  useEffect(() => {
    searchProducts();
  }, [category, query, page]);

  const howMany = () => {
    if (products !== 'loading' && products.length < 1) {
      return 'The are no products for this search'
    }
    else if (products === 'loading') {
      return 'Loading...'
    }
    return `Showing results for ${query}`
  }
 
  return (
    <>
      <Header />
      <div className='container-main'>
        <div className="results-banner">
          <div className="results-sort">
            <p>
              {howMany()}
            </p>
          </div>
        </div>
        <hr/>
        <div className="product-index-container">
          {
            Array.isArray(products) &&
            <ProductsIndex products={products}/>
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Results;
