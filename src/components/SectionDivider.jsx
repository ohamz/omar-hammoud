import React from "react";
import "../css/SectionDivider.css";

/**
 * SectionDivider component for separating sections
 */
function SectionDivider({ showDivider = true }) {
  if (!showDivider) return null;
  return (
    <div className="main-section-separator" aria-hidden="true">
      <svg
        className="divider-wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#151515" />
            <stop offset="50%" stopColor="#191919" />
            <stop offset="100%" stopColor="#151515" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill="url(#grad)"
        />
      </svg>
    </div>
  );
}

export default SectionDivider;
