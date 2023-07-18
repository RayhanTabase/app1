import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {cartUpdateQuantity, cartRemoved} from '../../redux/reducers/cart'

import DisplayText from '../PDP/DisplayText';
import DisplaySwatch from '../PDP/DisplaySwatch';
import NoImage from '../../assets/firstAid.jpg';

const CartProduct = ({ product,cartQuantity }) => {
  const dispatch = useDispatch();
  const [imageSourceNumber, setImageSourceNumber] = useState(0);

  const getTotalPrice = () => {
    if (product.quantity < 1) return 0;
    const total = product.price * cartQuantity;
    return total.toFixed(2);
  };

  const addQuantity = () => {
    dispatch(cartUpdateQuantity({product, quantity: 1}));
  };

  const reduceQuantity = () => {
    if (cartQuantity === 1) {
      dispatch(cartRemoved(product.id));
    } else {
      dispatch(cartUpdateQuantity({product, quantity: -1}));
    }
  };

  // const changeImage = (num) => {
  //   const images = productDataState.gallery;
  //   let nextImageNumber = imageSourceNumber + num;
  //   if (nextImageNumber >= images.length) {
  //     setImageSourceNumber(0);
  //   } else if (nextImageNumber < 0) {
  //     setImageSourceNumber(images.length - 1);
  //   } else {
  //     setImageSourceNumber(nextImageNumber);
  //   }
  // };

  const displayProduct = () => {
    const { name, image, quantity } = product;
    const imageSource = image || NoImage;
    // const selectedAttributes = attributes;

    return (
      <div className="cart-product-card">
        <div className="section1">
          <p className="name">{name}</p>
          <p className={`price ${quantity < 1 && 'strikeThroughText'}`}>
            <span className="symbol">₵</span>
            <span className="amount">{getTotalPrice()}</span>
          </p>
          {/* <div className="attributes d-flex-col">
            {attributes.map((attribute) => {
              if (attribute.type === "text") {
                return (
                  <DisplayText
                    key={attribute.name}
                    attribute={attribute}
                    selectedAttributes={selectedAttributes}
                    addAttribute={addAttribute}
                    cartPage={true}
                  />
                );
              } else if (attribute.type === "swatch") {
                return (
                  <DisplaySwatch
                    key={attribute.name}
                    attribute={attribute}
                    selectedAttributes={selectedAttributes}
                    addAttribute={addAttribute}
                    cartPage={true}
                  />
                );
              } else {
                return "";
              }
            })}
          </div> */}
        </div>
        <div className="section2">
          <div className="qty d-flex-col">
            <button type="button" onClick={addQuantity}>
              +
            </button>
            <p className="text">{cartQuantity}</p>
            <button type="button" onClick={reduceQuantity}>
              –
            </button>
          </div>
          <div className={`${quantity < 1 && "fade-content"} product-image`}>
            {quantity < 1 && (
              <div className="product-outOfStock">
                <p>out of stock</p>
              </div>
            )}
            <img src={imageSource} alt={name} loading="lazy" />
            {/* {gallery.length > 1 && (
              <div className="changeImageBtns">
                <button type="button" onClick={() => changeImage(-1)}>
                  {"<"}
                </button>
                <button type="button" onClick={() => changeImage(1)}>
                  {">"}
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {displayProduct()}
      <hr />
    </>
  );
};

export default CartProduct;
