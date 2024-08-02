import React from "react";
import "../css/ProgressRing.css";

/**
 * ProgressRing component for displaying progress rings
 *
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.id
 */
function ProgressRing({ children, id }) {
  return (
    <div className="ring-box">
      <div className="progress-ring">
        <div className="background-circle"></div>
        <div className="foreground-circle" id={"ring-" + id}></div>
      </div>
      <div className="ring-txt">{children}</div>
    </div>
  );
}

export default ProgressRing;
