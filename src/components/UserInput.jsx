import React from "react";
import "../css/UserInput.css";

function UserInput({ children, type = "text", icon }) {
  return (
    <div className="user-input-box">
      <input
        type={type}
        className="user-input"
        placeholder={children}
        required
      />
      <img
        src={"/assets/other-icons/" + icon + ".webp"}
        alt={icon + "-icon"}
        className="input-icon"
        draggable="false"
        loading="lazy"
      />
    </div>
  );
}

export default UserInput;
