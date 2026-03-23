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
 * @param {Boolean} props.small
 * @param {Boolean} props.hideDescription
 * @param {String} props.github
 */
function Project({ children, title, language, id, small, hideDescription, github }) {
  const badges = (language || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const cardClasses =
    (small ? "project-small" : "project") +
    (hideDescription ? " project--no-description" : "") +
    " hover-raise tilt";

  const cardContent = (
    <>
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
        {!hideDescription && <p className="project-txt-content">{children}</p>}
      </div>
    </>
  );

  if (github) {
    return (
      <a
        className={cardClasses + " project-link-wrap"}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} on GitHub`}
      >
        {cardContent}
      </a>
    );
  }

  return <div className={cardClasses}>{cardContent}</div>;
}

export default Project;
