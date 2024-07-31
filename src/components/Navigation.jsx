import { useState } from "react";
import NavLinks from "./NavLinks";
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
            <img
              className="menu-icon"
              src="/public/assets/other-icons/burger-bar.webp"
              alt="menu-icon"
              draggable="false"
              loading="lazy"
            />
            {/* TODO: make new component for icons */}
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
        <NavLinks className="navpage-links" />
      </nav>
    </>
  );
}

export default Navigation;
