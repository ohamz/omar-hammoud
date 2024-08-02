import React from "react";

import SocialIcon from "./SocialIcon";
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
      <SocialIcon
        name="instagram"
        link="https://www.instagram.com/omarhammouddd/"
        icon="/assets/socials-icons/instagram.webp"
      />
      <SocialIcon
        name="linkedin"
        link="https://www.linkedin.com/in/omar-hammoud-804675206/"
        icon="/assets/socials-icons/linkedin.webp"
      />
      <SocialIcon
        name="github"
        link="https://github.com/ohamz"
        icon="/assets/socials-icons/github-mark.webp"
      />
      <SocialIcon
        name="discord"
        link="https://discord.com/users/783307789078495272"
        icon="/assets/socials-icons/discord-mark.webp"
      />
      <SocialIcon
        name="telegram"
        link="https://t.me/omarhamz"
        icon="/assets/socials-icons/telegram.webp"
      />
    </div>
  );
}

export default SocialLinks;
