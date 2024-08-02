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
  return (
    <div className="project">
      <div className="project-img" id={"project-" + id}></div>
      <div className="project-txt">
        <div className="project-txt-title">{title}</div>
        <p className="project-txt-content">{children}</p>
        <p className="project-txt-footer">Language: {language}</p>
      </div>
    </div>
  );
}

export default Project;
