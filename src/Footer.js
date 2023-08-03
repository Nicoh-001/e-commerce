import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from './img/log.png';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Your logo */}
            <img src={logo} width="150" alt="Logo" className="img-fluid mb-3" />
            {/* Contact details */}
            <p>Contact us:</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-4 text-center">
            {/* Links */}
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/cart">Shop with Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            {/* Social media icons */}
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mr-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mr-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mr-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaLinkedin size={24} />
              </a>
            </div>
            {/* Shop with us button */}
            <a href="/cart" className="btn btn-primary mt-4">Shop with Us</a>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          {/* Copyright text */}
          <p>&copy; {new Date().getFullYear()} TimberHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
