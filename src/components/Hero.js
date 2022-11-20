import React from 'react';
import svgIcon from "../assests/illustration-mockups.svg"
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="hero-left-content">
          <h1>build the community you fans will love</h1>
          <p>huddle re-imagines the way build communites. you have a voice, but so does your audience. create
            connections with yours users as you engage in genuins discussion.</p>
          <button>get started free</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={svgIcon} alt="hero" />
      </div>
    </div>
  )
}

export default Hero