import React from 'react';
import "./Footer.css";
import logoImg from "../assests/logo.svg";

const Footer = () => {
  return (
    <div class="footer-container">
    <div class="box">
      <h1>Ready to build you community?</h1>
      <button>get started for free</button>
    </div>

    <footer>
      <div class="footer-logo">
        <img src={logoImg} alt="footer logo" />
      </div>
      <div class="footer-bottom">
        <ul class="footer-left">
          <li>
            <span><i class="fa-solid fa-location-dot"></i></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus blanditiis enim cum laborum
            dolorum.
          </li>
          <li>
            <span><i class="fa-solid fa-phone"></i></span>
            +91 8267543234
          </li>
          <li>
            <span><i class="fa-solid fa-envelope"></i></span>
            sikandrachauhan@gmail.com
          </li>
        </ul>
        <ul>
          <li>About me</li>
          <li>What we do</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>career</li>
          <li>blog</li>
          <li>contact us</li>
        </ul>
        <div class="social-media">
          <div class="social-list">
            <span><i class="fa-brands fa-facebook-f"></i></span>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
          </div>
          <div class="copyright">
            <span>&#169; copyright 2018 huddle. All right reserved</span>
          </div>
        </div>
        </div>
    </footer>
  </div>
  )
}

export default Footer