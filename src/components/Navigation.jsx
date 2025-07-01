import { useState } from "react";
import NavLinks from "./NavLinks";
import OtherIcon from "./OtherIcon";
import "../css/Navigation.css";

/**
 * Navigation component for displaying the navigation bar
 */
function Navigation({ visibleLink }) {
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
        </div>
        <NavLinks className="navbar" visibleLink={visibleLink} />
      </nav>
      <nav className={"navpage" + (navPageVisible ? " show-navpage" : "")}>
        <NavLinks className="navpage" onLinkClick={hideNavPage} />
      </nav>
    </>
  );
}

export default Navigation;
