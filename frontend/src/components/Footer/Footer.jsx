import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-logo" />
          <p>
            Siggyto brings you fast, fresh, and reliable food delivery right to
            your doorstep. Our mission is to provide a delightful experience
            with every order by offering great taste, quality, and convenience.
            We partner with trusted restaurants to ensure your favorite meals
            reach you on time and in perfect condition. At Siggyto, every dish
            is carefully prepared and delivered with care, so you can enjoy
            every bite with confidence.
          </p>

          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9876543210</li>
            <li>contact@siggyto.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>&copy; {new Date().getFullYear()} Siggyto. All rights reserved.</p>
    </div>
  );
};

export default Footer;
