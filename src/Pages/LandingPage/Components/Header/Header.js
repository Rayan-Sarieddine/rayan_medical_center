import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="landing-header">
      <img src={require("../images/logo-white.png")} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="jsx-a11y/anchor-is-valid">About Us</a>
          </li>
          <li>
            <a href="jsx-a11y/anchor-is-valid">doctors</a>
          </li>
          <li>
            <a href="jsx-a11y/anchor-is-valid">Patients</a>
          </li>
          <Link to="/login">
            <button>Log-In</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
