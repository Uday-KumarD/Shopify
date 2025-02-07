import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer bg-dark text-white py-5 mt-5"
      style={{
        width: "100%",
        margin: 0,
        padding: "3rem 0",
        fontSize: "0.9rem",
      }}
    >
      <div className="container-fluid px-5">
        <div className="row mx-0 justify-content-between">
          {/* Company Info */}
          <div className="col-md-3 mb-4 text-start">
            <h5>About Shopify</h5>
            <p>
              Shopify is your go-to destination for the latest trends in
              Fashion, Electronics, and Jewellery. We strive to provide quality
              and style at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4 text-start">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-light text-decoration-none">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="text-light text-decoration-none">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-light text-decoration-none"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-light text-decoration-none"
                >
                  Contact Us
                </NavLink>
              </li>
      
              <li>
                <NavLink
                  to="/privacy"
                  className="text-light text-decoration-none"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-3 mb-4 text-start">
            <h5>Customer Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:support@trendaura.com" className="text-light">
                  Email: shopify@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-light">
                  Phone: 9988998899
                </a>
              </li>
              <li>
                <p>Help</p>
              </li>
              
                
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="col-md-3 mb-4 text-start">
            <h5>Follow Us</h5>
            <div className="d-flex align-items-center">
              <a href="https://facebook.com" className="text-light me-3">
                <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
              </a>
              
              <a href="https://instagram.com" className="text-light me-3">
                <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a href="https://linkedin.com" className="text-light me-3">
                <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a href="https://youtube.com" className="text-light">
                <i className="bi bi-youtube" style={{ fontSize: "1.5rem" }}></i>
              </a>
            </div>
            
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Shopify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;