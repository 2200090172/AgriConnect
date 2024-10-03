import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
