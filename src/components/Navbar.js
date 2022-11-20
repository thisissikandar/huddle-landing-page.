import React from 'react';
import "./Navbar.css";
import navLogo from "../assests/logo.svg"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={navLogo} alt="logo" />
      </div>
      <div className="btn">
        <button>Try it free</button>
      </div>
    </nav>
  )
}

export default Navbar