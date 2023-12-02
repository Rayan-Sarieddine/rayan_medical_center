import React from "react";
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
          <button>Log-In</button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
