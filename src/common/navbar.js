import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [hashRoute, setHashRoute] = useState("");
  const [route, setRoute] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      setRoute("home");
    }
    setHashRoute(location.hash);
  }, [location.hash]);

  return (
    <nav className="navbar navbar-expand-lg modern-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/assets/logo/logo.svg" alt="Logo" height="30" />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-4">
            <li className="nav-item">
              <Link className={`nav-link ${route === "/" ? "active" : ""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <HashLink className={`nav-link ${route === "/aboutus" ? "active" : ""}`} to="/aboutus">
                About Us
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${route === "/tokenomics" ? "active" : ""}`} to="/tokenomics">
                Tokenomics
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${route === "/roadmap" ? "active" : ""}`} to="/roadmap">
                Roadmap
              </Link>
            </li>
            <li className="nav-item">
              <HashLink
                className={`nav-link ${hashRoute === "#contactus" ? "active" : ""}`}
                smooth
                to="/#contactus"
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <a href="/assets/Sentos.pdf" target="_blank" className="btn-modern">
              Buy Now XBE
            </a>
            <a href="/assets/Sentos.pdf" target="_blank" className="btn-outline-modern">
              Whitepaper
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
