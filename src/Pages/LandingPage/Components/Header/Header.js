import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="landing-header">
      <img src={require("../images/logo-white.png")} alt="logo" />
      <nav>
        <ul>
          <li>About Us</li>
          <li>doctors</li>
          <li>Patients</li>
          <Link to="/login">
            <button>Log-In</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
