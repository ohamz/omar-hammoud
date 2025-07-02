import React from "react";

import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import "../css/Footer.css";

/**
 * Footer component for displaying footer information
 */
function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <a title="footer-logo" href="index.html" className="logo footer-logo">
          Omar Hammoud
        </a>
      </div>
      <div className="footer-section">
        <h3>sitemap</h3>
        <NavLinks className="sitemap" isFooter={true} />
      </div>
      <div className="footer-section">
        <h3>contact info</h3>
        <p className="footer-txt">zurich, switzerland</p>
        <p className="footer-txt">+41 78 206 30 53</p>
        <p className="footer-txt"><span>omar.hammoudx@gmail.com</span></p>
      </div>
      <div className="footer-section">
        <h3>follow me</h3>
        <SocialLinks isFooter={true} />
      </div>
    </footer>
  );
}

export default Footer;
