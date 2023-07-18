import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {cartAdded} from '../../redux/reducers/cart'
import './description.css';
import DisplayText from './DisplayText';
import DisplaySwatch from './DisplaySwatch';
import ProductDescription from './ProductDescription';
import NoImage from '../../assets/firstAid.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { base } from '../../util/apiRoutes';


const Description = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.cart);
  const { id, } = useParams();
  const [product, setProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAttributes, setSelectedAttributes] = useState({});

  const getProduct = async() => {
    const response = await fetch(`${base}/products/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
      }
    });
    const data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, [id]);


  const addAttribute = (id, value) => {
    setSelectedAttributes((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const changeSelectedImage = (source) => {
    setSelectedImage(source);
  };

  const checkAttributesSelected = () => {
    const attributes = product.attributes;
    return attributes.length === Object.keys(selectedAttributes).length;
  };

  const addToCart = () => {
    const { id } = product;
    console.log(id)
    dispatch(cartAdded({product, quantity: 1}));
  };

  const displayDescription = () => {
    let price = product.price;

    return (
      <div className="product-description">
        {product && (
          <>
            <div className="product-thumbnails">
              {/* {product.gallery.map((imageSource) => (
                <button
                  key={imageSource}
                  className="btn-colorless thumbnail"
                  type="button"
                  onClick={() => changeSelectedImage(imageSource)}
                >
                  <img src={imageSource} alt={product.name} loading="lazy" />
                </button>
              ))} */}
            </div>
            <div className="product-image">
              <img src={product.image || NoImage} alt={product.name} loading="lazy" />
            </div>
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              {/* <div className="product-attributes">
                {product.attributes.map((attribute) => {
                  if (attribute.type === 'text') {
                    return (
                      <DisplayText
                        key={attribute.name}
                        attribute={attribute}
                        addAttribute={addAttribute}
                        selectedAttributes={selectedAttributes}
                        cartPage={false}
                      />
                    );
                  } else if (attribute.type === 'swatch') {
                    return (
                      <DisplaySwatch
                        key={attribute.name}
                        attribute={attribute}
                        addAttribute={addAttribute}
                        selectedAttributes={selectedAttributes}
                        cartPage={false}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div> */}
    
              <p className="product-price">
                <span className="text">PRICE:</span>
                <span className="amount d-flex">
                  <span>₵</span>
                  <span>{price}</span>
                </span>
              </p>
    
              {product.quantity > 0 ? (
                <button type="button" className="add-toCart-btn" onClick={addToCart}>
                  ADD TO CART
                </button>
              ) : (
                <button type="button" className="disabled-btn" disabled>
                  OUT OF STOCK
                </button>
              )}
    
              <p className="product-information">
                {product.description}
              </p>
            </div>
          </>
        )}
      </div>
    );    
  }
  
  return (
    <>
      <Header />
      <div className="product-description d-flex">
        {displayDescription()}
      </div>
      <Footer />
    </>
  )
}

export default Description;