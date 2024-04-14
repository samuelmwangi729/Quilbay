import React, { Component } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { PiCaretDownLight } from "react-icons/pi";
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
                <li className="nav-item has-submenu service">
                  <a className="nav-link" href="/contact">Services</a> 
                  <div className="icon is-submenu">
                    <PiCaretDownLight/>
                  </div>
                    <ul className="submenu">
                      <li className="submenu-item">
                        <a href="#" className="menu-link">Course Work</a>
                      </li>
                      <li className="submenu-item">
                        <a href="#" className="menu-link">Content Writing</a>
                      </li>
                      <li className="submenu-item">
                        <a href="#" className="menu-link">Article Writing</a>
                      </li>
                      <li className="submenu-item">
                        <a href="#" className="menu-link">Copy Writing</a>
                      </li>
                      <li className="submenu-item">
                        <a href="#" className="menu-link">Editing & Proofreading</a>
                      </li>
                      <li className="submenu-item">
                        <a href="#" className="menu-link">Ghost Writing</a>
                      </li>
                      <li className="submenu-item">
                        <a href="#" className="menu-link">Technical Writing</a>
                      </li>
                      <li className="submenu-item">
                        <a href="#" className="menu-link">Academic Writing</a>
                      </li>
                    </ul>
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
            <div className="mobile-menu-bar">
              <div className="icon-menu">
                <FaBarsStaggered/>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
export default Header;