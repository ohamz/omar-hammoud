import React from "react";
import "../css/GreenButton.css";

/**
 * GreenButton component
 *
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.id
 * @param {String} props.btnTxtColor
 * @param {Boolean} props.isLoading
 */
function GreenButton({ children, id, btnTxtColor, isLoading }) {
  return (
    <button type="submit" className={"btn " + btnTxtColor} id={id}>
      {isLoading ? <div class="loader"></div> : children}
    </button>
  );
}

export default GreenButton;
