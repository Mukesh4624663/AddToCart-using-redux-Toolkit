// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((items) => items.cart);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          {/* <img src="your-logo.png" alt="Your Logo" /> */}
          <h2>LOGO</h2>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <button type="button" className="cart-button">
              <span className="cart-icon">&#128722;</span>
              {/* <span className="cart-count">{cart.length}</span> */}
              <span className="cart-count">{cart.length}</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
