import React from 'react'
import Homelayout from './Homelayout'

const Home = () => {
  return (
    <Homelayout>
      <div className="main-container">
        <div className="main">
          <header>
            <div className="overlay">
              <h2 className="title">Empowering Farmers for a Sustainable Future</h2>
              <p className="description">
                “Together, we can cultivate success and resilience through knowledge, innovation, and community.”
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </header>
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
    </Homelayout>
  )
}

export default Home