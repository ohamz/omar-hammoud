import { useState } from "react";
import NavLinks from "./NavLinks";
import OtherIcon from "./OtherIcon";
import "../css/Navigation.css";

/**
 * Navigation component for displaying the navigation bar
 */
function Navigation(visibleLink) {
  const [navPageVisible, setOpen] = useState(false);
  const handleBurgerClick = () => {
    setOpen(!navPageVisible);
  };
  const hideNavPage = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <a title="navbar-logo" href="index.html" className="logo navbar-logo">
            Omar Hammoud
          </a>
          <div className="burger-menu-box">
            <div
              className={"burger-menu" + (navPageVisible ? " open" : "")}
              onClick={handleBurgerClick}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          {/* <button type="button" className="nav-btn" onClick={showNavPage}>
            <OtherIcon className="menu-icon" icon="menu" />
          </button> */}
        </div>
        <NavLinks className="navbar" visibleLink={visibleLink} />
      </nav>
      <nav className={"navpage" + (navPageVisible ? " show-navpage" : "")}>
        {/* <div className="navpage-btn-box">
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
        </div> */}
        <NavLinks
          className="navpage"
          visibleLink={visibleLink}
          onLinkClick={hideNavPage}
        />
      </nav>
    </>
  );
}

export default Navigation;
