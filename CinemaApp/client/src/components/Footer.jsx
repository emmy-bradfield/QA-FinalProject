import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <nav className="footer">
        <ul className="footer-nav">
          <li className="navi-f">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="navi-f">
            <Link to="/information/contact">
              Contact
            </Link>
          </li>
          <li className="navi-f">
            <Link to="/information">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Footer;