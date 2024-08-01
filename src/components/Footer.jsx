import React from "react";

import NavLinks from "./NavLinks";
import UserInput from "./UserInput";
import GreenButton from "./GreenButton";
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
        <h3>newsletter</h3>
        <form className="newsletter-form" autoComplete="off">
          <UserInput type="email" icon="mail">
            Enter your Email address
          </UserInput>
          <GreenButton id="newsletter-btn">connect</GreenButton>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
