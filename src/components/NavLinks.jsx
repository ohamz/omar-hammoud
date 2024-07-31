import "../css/NavLinks.css";

function NavLinks({ className }) {
  const onDownloadCV = () => {
    window.open("/assets/Omar's CV.pdf", "_blank");
  };

  return (
    <div className={className}>
      <a title="home-link" href="#home" className="link web-link">
        home
      </a>
      <a title="about-link" href="#about" className="link web-link">
        about
      </a>
      {/* <a title="services-link" href="#services" className="link web-link">services</a> */}
      <a title="projects-link" href="#projects" className="link web-link">
        projects
      </a>
      <a title="contact-link" href="#contact" className="link web-link">
        contact
      </a>
      <button className="link download-btn" onClick={onDownloadCV}>
        download cv
      </button>
    </div>
  );
}

export default NavLinks;
