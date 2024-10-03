// Home.js
import React from 'react';
import agriIcon from './agri-icon.png';
import '../App.css';

const Home = () => {
  return (
    <div className="hero-container">
      <header className="hero-header">
        <div className="logo">
          <img src={agriIcon} alt="Logo" />
          <h3>Agri-Connect</h3>
        </div>
        <nav className="hero-nav">
          <ul>
            <li><a href="/importance-of-farming">Importance of Farming</a></li>
            <li><a href="#learn-about-farming">Learn About Farming</a></li>
            <li><a href="#discussions">Discussions</a></li>
          </ul>
        </nav>
      </header>
      <div className="hero-content">
        <div className="image-content">
          {/* Remove the image here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
