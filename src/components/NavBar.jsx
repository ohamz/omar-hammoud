import NavLinks from "./NavLinks";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <a title="navbar-logo" href="index.html" className="logo navbar-logo">
          Omar Hammoud
        </a>
        <button type="button" className="nav-btn">
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
  );
}

export default NavBar;
