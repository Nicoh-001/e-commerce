import React, { useState } from 'react';
import logo from './img/logo.png';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header className="App-header">
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top py-1${collapsed ? '' : ' navbar-expanded'}`}>
        <div className="container">
          <a className="navbar-brand logo" href="/">
            <img src={logo} width="120" className="d-inline-block align-top" alt="Logo" />
          </a>
          <h1 className="navbar-brand logo">Welcome to TimberHub</h1>
          <button
            className={`navbar-toggler${collapsed ? ' collapsed' : ''}`}
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${collapsed ? '' : ' show'}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Re-run
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About-us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <a className="navbar-brand logo" href="/">
            <img src={logo} width="120" className="d-inline-block align-top" alt="Logo" />
          </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
