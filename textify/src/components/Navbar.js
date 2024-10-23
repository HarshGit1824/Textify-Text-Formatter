import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="data:image/png;base64,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"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* -- Search-option -- */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary mx-1" type="submit">
              Search
            </button>
          </form>

          {/* -- Change-Mode-option -- */}
          {/* <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
          </div> */}

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About text here"
// };
