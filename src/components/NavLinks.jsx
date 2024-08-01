import "../css/NavLinks.css";

function NavLinks({ className, isFooter = false }) {
  const onDownloadCV = () => {
    window.open("/assets/Omar's CV.pdf", "_blank");
  };

  return (
    <div className={className}>
      <a
        title="home-link"
        href="#home"
        className={isFooter ? "sitemap-link footer-txt" : "link web-link"}
      >
        home
      </a>
      <a
        title="about-link"
        href="#about"
        className={isFooter ? "sitemap-link footer-txt" : "link web-link"}
      >
        about
      </a>
      {/* <a title="services-link" href="#services" className={isFooter ? "sitemap-link footer-txt" : "link web-link"}>services</a> */}
      <a
        title="projects-link"
        href="#projects"
        className={isFooter ? "sitemap-link footer-txt" : "link web-link"}
      >
        projects
      </a>
      <a
        title="contact-link"
        href="#contact"
        className={isFooter ? "sitemap-link footer-txt" : "link web-link"}
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
