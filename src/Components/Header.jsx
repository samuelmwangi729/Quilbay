import React, { Component } from 'react'

class Header extends Component {
    constructor(){
        super();
    }
  render = ()=> {
    return (
      <>
        <div className="navigation-bar">
          <nav className="navbar-nav">
            {/* start with navbar Brand */}
            <div className="navbar-brand">
              <a href="http://">
                <h1 className='logo'>
                  QuilBay
                </h1>
              </a>
            </div>
            {/* create the navigation links  */}
            <div className="navbar-menus">
              <ul className="navbar">
                <li className="nav-item">
                  <a className="nav-link" href="/">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">FAQs</a>
                </li>
              </ul>
              <div className="auth-buttons">
                <button className="btn btn-primary">Register</button>
                <button className="btn btn-default">Login</button>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
export default Header;