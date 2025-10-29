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
      <div className="progress-ring" role="img" aria-label={`${children} proficiency`}>
        <div className="background-circle" aria-hidden="true"></div>
        <div className="foreground-circle" id={"ring-" + id} aria-hidden="true"></div>
      </div>
      <div className="ring-txt">{children}</div>
    </div>
  );
}

export default ProgressRing;
