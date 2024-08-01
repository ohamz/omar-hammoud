import React from "react";
import "../css/GreenButton.css";

function GreenButton({ children, id }) {
  return (
    <button type="submit" className="btn" id={id}>
      {children}
    </button>
  );
}

export default GreenButton;
