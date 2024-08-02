import React from "react";
import "../css/OtherIcon.css";

/**
 * OtherIcon component for displaying other icons
 *
 * @param {Object} props
 * @param {String} props.className
 * @param {String} props.icon
 */
function OtherIcon({ className, icon }) {
  return (
    <img
      src={"/assets/other-icons/" + icon + ".webp"}
      alt={icon + "-icon"}
      className={className}
      draggable="false"
      loading="lazy"
    />
  );
}

export default OtherIcon;
