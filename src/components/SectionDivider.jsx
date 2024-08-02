import React from "react";
import "../css/SectionDivider.css";

/**
 * SectionDivider component for separating sections
 */
function SectionDivider({ showDivider = true }) {
  if (!showDivider) return null;
  return <div className="main-section-separator"></div>;
}

export default SectionDivider;
