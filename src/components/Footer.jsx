import React from "react";

import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import "../css/Footer.css";

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
        <NavLinks className="sitemap-links" isFooter={true} />
      </div>
      <div className="footer-section">
        <h3>contact info</h3>
        <p className="footer-txt">lausanne, switzerland</p>
        <p className="footer-txt">phone: +41 78 206 30 53</p>
      </div>
      <div className="footer-section">
        <h3>follow me</h3>
        <SocialLinks isFooter={true} />
      </div>
    </footer>
  );
}

export default Footer;
