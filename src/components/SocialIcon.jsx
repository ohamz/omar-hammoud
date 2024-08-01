import React from "react";
import "../css/SocialIcon.css";

function SocialIcon({ name, link, icon }) {
  return (
    <a
      title={name + "-link"}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="social-icon"
        id={name + "-icon"}
        src={icon}
        alt={name + "-icon"}
        draggable="false"
        loading="lazy"
      />
    </a>
  );
}

export default SocialIcon;
