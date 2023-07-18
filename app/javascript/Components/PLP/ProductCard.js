import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import addToCartIcon from '../../assets/in_cart.svg';
import store from '../../redux/store';
import { change_product } from '../../redux/navigation/actions';
import DisplaySwatch from '../PDP/DisplaySwatch';
import DisplayText from '../PDP/DisplayText';
import { useSelector, useDispatch } from 'react-redux';
import {cartAdded} from '../../redux/reducers/cart'
import NoImage from '../../assets/firstAid.jpg';
import { base } from '../../util/apiRoutes';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.cart);
  console.log(cart);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [showAttributesPopUp, setShowAttributesPopUp] = useState(false);


  const addAttribute = (id, value) => {
    setSelectedAttributes((prevSelectedAttributes) => ({
      ...prevSelectedAttributes,
      [id]: value
    }));
  };

  const checkAttributesSelected = () => {
    const { attributes } = product;
    return attributes.length === Object.keys(selectedAttributes).length;
  };

  const triggerAttributesPopUp = () => {
    // const { attributes } = product;
    // if (attributes.length === 0) {
    //   addToCart();
    // } else {
      setShowAttributesPopUp(true);
      setSelectedAttributes({});
    // }
  };

  const closeAttributesPopUp = () => {
    setShowAttributesPopUp(false);
  };

  const addToCart = () => {
    const { id } = product;
    console.log(id)
    dispatch(cartAdded({product, quantity: 1}));
  };

  const changeProductPage = () => {
    store.dispatch(change_product(product));
  };

  const attributesPopUp = () => {
    if (!showAttributesPopUp) {
      return null;
    }
    const { attributes } = product;
    return (
      <div className="full-screen-popup">
        <div className="pop-up-card">
          <p className="message">Please specify attributes</p>
          {/* <div className="product-attributes">
            {attributes.map((attribute) => {
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
              }
              return null;
            })}
          </div> */}
          <div className="d-flex action-btns">
            <button className={`${checkAttributesSelected() ? 'add-btn' : 'disabled-btn'}`} onClick={addToCart}>
              Add
            </button>
            <button className="cancel-btn" onClick={closeAttributesPopUp}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const displayProduct = () => {
    const { name, price, image, quantity, id, description } = product;
    const inStock = quantity > 0;
    // let price = prices[0];
    let isInCart = cart[id] || false;
    // let item = cart.find((item) => item.data.id === id);
    // if (item !== undefined) {
    //   isInCart = true;
    // }
    // const { currencyType: selectedCurrency } = currencyReducer;
    // if (selectedCurrency) {
    //   price = prices.find((price) => price.currency.label === selectedCurrency.label);
    // }
    // const imageSource = gallery[0];

    return (
      <div className={`product-card ${!inStock && 'fade-content'}`}>
        {quantity < 1 && (
          <div className="product-outOfStock">
            <p>out of stock</p>
          </div>
        )}

        {!isInCart && inStock && (
          <div className="product-inCart">
            <button className="btn-colorless" onClick={addToCart}>
              <img src={addToCartIcon} alt="add to cart" loading="lazy" />
            </button>
          </div>
        )}

        <NavLink to={`${base}/products/description/${id}`}>
          <img src={image || NoImage} alt={name} className="product-image"/>
          <p className="product-name">
            <span>{name}</span>
          </p>
          <p className="product-price d-flex">
            <span>₵</span>
            <span>{price}</span>
          </p>
        </NavLink>
      </div>
    );
  };

  return (
    <>
      {/* {attributesPopUp()} */}
      {displayProduct()}
    </>
  );
};

export default ProductCard;
