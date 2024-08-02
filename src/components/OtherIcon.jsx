import React from "react";
import "../css/OtherIcon.css";

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
