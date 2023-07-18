import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="newsletter">
        <h2>Sign Up For Newsletter</h2>
        <p>Join 10,000+ Subscribers and get amazing discounts and offers.</p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <button className="submit-btn">Subscribe</button>
        </div>
      </div>

      <div className="contact">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Address</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <span>Call us</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-mobile-alt"></i>
          <span>App coming soon</span>
        </div>
      </div>
      <hr />
      <div className="other-info">
        <div>
          <div className="logo">Logo</div>
          <p>CapaChemist summary</p>
        </div>
        <div className="info-section">
          <h4>Info</h4>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="social-section">
          <h4>Socials</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© 2023 CapaChemist. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
