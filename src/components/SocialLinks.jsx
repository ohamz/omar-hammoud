import React from "react";

import { socialIcons } from "../constants/data.js";
import "../css/SocialLinks.css";

/**
 * SocialLinks component for displaying social media icons
 *
 * @param {Object} props
 * @param {Boolean} props.isFooter
 */
function SocialLinks({ isFooter = false }) {
  return (
    <div className={isFooter ? "footer-social-icons" : "socials-icons"}>
      {socialIcons.map((e, i) => (
        <a
          key={i}
          className="social-icon"
          title={e.name + "-link"}
          href={e.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id={e.name + "-icon"}
            src={"/assets/social-icons/" + e.name + ".svg"}
            alt={e.name + "-icon"}
            draggable="false"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
