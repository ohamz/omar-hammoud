import React from "react";
import "../css/Project.css";

/**
 * Project component for displaying project information
 *
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.title
 * @param {String} props.language
 * @param {String} props.id
 */
function Project({ children, title, language, id }) {
  const badges = (language || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <div className="project hover-raise tilt">
      <div className="project-img" id={"project-" + id}></div>
      <div className="project-txt">
        <div className="project-txt-title">{title}</div>
        {badges.length > 0 && (
          <div className="project-badges">
            {badges.map((b, i) => (
              <span key={i} className="badge">
                {b}
              </span>
            ))}
          </div>
        )}
        <p className="project-txt-content">{children}</p>
      </div>
    </div>
  );
}

export default Project;
