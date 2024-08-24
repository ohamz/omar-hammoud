import "../css/NavLinks.css";

import { links } from "../constants/data.js";

/**
 * NavLinks component for displaying navigation links
 *
 * @param {Object} props
 * @param {String} props.className
 * @param {Boolean} props.isFooter
 * @param {Function} props.onLinkClick
 */
function NavLinks({
  className,
  visibleLink = null,
  isFooter = false,
  onLinkClick = () => {},
}) {
  const onDownloadCV = () => {
    window.open("/assets/Omar_CV.pdf", "_blank");
  };

  return (
    <div className={className + "-links"}>
      {links.map((e, i) => (
        <a
          key={i}
          title={e.id + "-link"}
          href={"#" + e.id}
          className={
            (visibleLink && visibleLink.visibleLink === e.id
              ? "web-link-active "
              : "") + (isFooter ? "sitemap-link footer-txt" : "link web-link")
          }
          onClick={onLinkClick}
        >
          {e.id}
        </a>
      ))}
      {!isFooter && (
        <button className="link download-btn" onClick={onDownloadCV}>
          download cv
        </button>
      )}
    </div>
  );
}

export default NavLinks;
