import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Checkout.css';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [email, setEmail] = useState('');
  const [createAccount, setCreateAccount] = useState(false);

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    if (createAccount) {
      console.log('Create Account for user');
    }

    // Submit the information to the endpoint
    // You can implement the API call or any other logic here
    // Once the order is confirmed, you can show a success message or redirect the user to a confirmation page
  };

  const renderCartItems = () => {
    return Object.values(cartItems).map((item) => {
      const { id, name, price, quantity } = item.product;
      return (
        <div key={id} className="cart-item">
          <p>{name}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <hr />
        </div>
      );
    });
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    Object.values(cartItems).forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  return (
    <div className="checkout-page container-main">
      <div className="user-data-section">
        <h2>User Details</h2>
        <form onSubmit={handleConfirmOrder}>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="additional-info">Additional Information</label>
            <textarea
              id="additional-info"
              name="additional-info"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            ></textarea>
          </div>          
          <div className="form-group">
            <input
              type="checkbox"
              id="create-account"
              name="create-account"
              checked={createAccount}
              onChange={(e) => setCreateAccount(e.target.checked)}
            />
            <label htmlFor="create-account">Create Account</label>
          </div>
          <button type="submit" className="confirm-order-btn">
            Confirm Order
          </button>
        </form>
      </div>
      <p className="confirmation-message">
        An agent will call you to confirm the order and arrange delivery.
      </p>
      <div className="cart-section">
        <h2>Cart Items</h2>
        {renderCartItems()}
        <p className="total-quantity">Total Quantity: {getTotalQuantity()}</p>
      </div>
    </div>
  );
};

export default CheckoutPage;
