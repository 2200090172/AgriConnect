import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
const Homelayout = ({children}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <div className="navbar">
        <div className="menu">
          <h3 className="logo">
            Agri<span>Connect</span>
          </h3>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="/" style={{ "--i": "0.05s" }}>
              Home
            </a>
          </li>
          <li>
            <Link to="/adminsignin" style={{ "--i": "0.15s" }}>
              Sign In as Admin
            </Link>
          </li>
          <li>
            <Link to="/farmersignin" style={{ "--i": "0.2s" }}>
              Sign In as Farmer
            </Link>
          </li>
          <li>
            <Link to="/publicsignin" style={{ "--i": "0.25s" }}>
              Sign In as Public
            </Link>
          </li>
          <li>
            <Link to="/expertsignin" style={{ "--i": "0.25s" }}>
              Sign In as Expert
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Homelayout;
