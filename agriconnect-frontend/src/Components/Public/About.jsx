import React, { useState } from 'react';
import './About.css'; // Add your custom CSS here
import { Link } from 'react-router-dom'; // For routing to different sections

const About = () => {
  // Mocked login status (In real cases, this would come from context or authentication logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AGRI<span>CONNECT</span></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/PublicLogin">Login</Link></li>
          <li><Link to="/PublicSignin">Sign Up</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          {isLoggedIn ? (
            <>
              <h1>Welcome Back, Farmer!</h1>
              <p>
                "Thank you for being part of the AgriConnect community. Continue exploring resources, discussions, and tools to enhance your farming practices."
              </p>
              <button className="hero-btn">Explore Dashboard</button>
            </>
          ) : (
            <>
              <h1>Empowering Farmers for a Sustainable Future</h1>
              <p>
                "Together, we can cultivate success and resilience through knowledge, innovation, and community."
              </p>
              <button className="hero-btn">Read More</button>
            </>
          )}
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="dashboard-container">
        <h2>Explore the Dashboard</h2>
        <div className="dashboard-links">
          <Link to="/farming-resources" className="dashboard-item">
            Importance of Farming
          </Link>
          <Link to="/learn-farming" className="dashboard-item">
            Learn About Farming
          </Link>
          <Link to="/discussions" className="dashboard-item">
            Join Discussions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
