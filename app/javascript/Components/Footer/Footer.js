import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="newsletter">
        <h2>
          Sign Up For Newsletter
        </h2>
        <p>
          Join 10000+ Subscribers and get a amazing <br/>
          discounts and offers.
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button className="submit-btn">Subscribe</button>
        </div>
      </div>

      <div className="contact">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <div className="text">
            <h4>Address</h4>
            <p>Text</p>
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <div className="text">
            <h4>CALL US</h4>
            <p>(233)-00-000-0000</p>
            <p>email@email.com</p>
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-mobile-alt"></i>
          <div className="text">
            <h4>App coming soon!</h4>
          </div>
        </div>
      </div>
      <hr/>
      <div className="other-info">
        <div className='other-item'>
          <div>logo</div>
          <p>
            CapaChemist summary
          </p>
        </div>
        <div className='other-item-multiple'>
          <div className='section'>
            <h4>Info</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='section'>
            <h4>Info</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='section'>
            <h4>Info</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='other-item'>
          <h4>Socials</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © {new Date().getFullYear()} Capachemist. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
