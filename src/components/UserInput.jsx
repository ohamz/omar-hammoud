import React from "react";
import "../css/UserInput.css";

function UserInput({ children, name, type = "text", icon, value, onChange }) {
  return (
    <div className="user-input-box">
      <input
        type={type}
        name={name}
        className="user-input"
        placeholder={children}
        value={value}
        onChange={onChange}
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
