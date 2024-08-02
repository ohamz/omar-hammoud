import "../css/NavLinks.css";

/**
 * NavLinks component for displaying navigation links
 *
 * @param {Object} props
 * @param {String} props.className
 * @param {Boolean} props.isFooter
 * @param {Function} props.onLinkClick
 */
function NavLinks({ className, isFooter = false, onLinkClick = () => {} }) {
  const onDownloadCV = () => {
    window.open("/assets/Omar's CV.pdf", "_blank");
  };

  return (
    <div className={className}>
      <a
        title="home-link"
        href="#home"
        className={isFooter ? "sitemap-link footer-txt" : "link web-link"}
        onClick={onLinkClick}
      >
        home
      </a>
      <a
        title="about-link"
        href="#about"
        className={isFooter ? "sitemap-link footer-txt" : "link web-link"}
        onClick={onLinkClick}
      >
        about
      </a>
      {/* <a title="services-link" href="#services" className={isFooter ? "sitemap-link footer-txt" : "link web-link"}>services</a> */}
      <a
        title="projects-link"
        href="#projects"
        className={isFooter ? "sitemap-link footer-txt" : "link web-link"}
        onClick={onLinkClick}
      >
        projects
      </a>
      <a
        title="contact-link"
        href="#contact"
        className={isFooter ? "sitemap-link footer-txt" : "link web-link"}
        onClick={onLinkClick}
      >
        contact
      </a>
      {!isFooter && (
        <button className="link download-btn" onClick={onDownloadCV}>
          download cv
        </button>
      )}
    </div>
  );
}

export default NavLinks;
