// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              {/* logo */}
              <div className="site-logo">
                <NavLink style={{
                    fontSize:"20px",
                    color:"white"
                }} to="/">
                 FolerBazar
                </NavLink>
              </div>
              {/* logo */}
              {/* menu start */}
              <nav className="main-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li><NavLink to="/about">About</NavLink></li>

                  <li>
                    <NavLink to="/news">News</NavLink>
                   
                  </li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li>
                    <NavLink to="/shop">Shop</NavLink>
        
                  </li>
                  <li>
                    <div className="header-icons">
                      <NavLink className="shopping-cart" to="/cart"><i className="fas fa-shopping-cart" /></NavLink>
                      <NavLink className="mobile-hide search-bar-icon" to="#"><i className="fas fa-search" /></NavLink>
                    </div>
                  </li>
                </ul>
              </nav>
              <NavLink className="mobile-show search-bar-icon" to="#"><i className="fas fa-search" /></NavLink>
              <div className="mobile-menu" />
              {/* menu end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
