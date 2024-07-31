import "./NavPage.css";
import NavLinks from "./NavLinks";

function NavPage() {
  return (
    <nav className="navpage">
      <div className="navpage-btn-box">
        <button type="button" className="nav-btn navpage-btn">
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
  );
}

export default NavPage;
