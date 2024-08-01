import React from "react";
import "../css/GreenButton.css";

function GreenButton({ children }) {
  return (
    <button type="submit" className="btn" id="newsletter-btn">
      {children}
    </button>
  );
}

export default GreenButton;
