import { useState } from "react";
import NavLinks from "./NavLinks";
import OtherIcon from "./OtherIcon";
import "../css/Navigation.css";

function Navigation() {
  const [navPageVisible, setShowNavPage] = useState(false);

  const showNavPage = () => setShowNavPage(true);
  const hideNavPage = () => setShowNavPage(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <a title="navbar-logo" href="index.html" className="logo navbar-logo">
            Omar Hammoud
          </a>
          <button type="button" className="nav-btn" onClick={showNavPage}>
            <OtherIcon className="menu-icon" icon="menu" />
          </button>
        </div>
        <NavLinks className="navbar-links" />
      </nav>
      <nav className={"navpage" + (navPageVisible ? " show-navpage" : "")}>
        <div className="navpage-btn-box">
          <button
            type="button"
            className="nav-btn navpage-btn"
            onClick={hideNavPage}
          >
            <img
              className="close-icon"
              src="./assets/other-icons/close.webp"
              alt="close-icon"
              draggable="false"
              loading="lazy"
            />
          </button>
        </div>
        <NavLinks className="navpage-links" onLinkClick={hideNavPage} />
      </nav>
    </>
  );
}

export default Navigation;
