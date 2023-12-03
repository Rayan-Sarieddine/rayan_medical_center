import React from "react";
import { Link } from "react-router-dom";
import "./WelcomeAdmin.css";
function WelcomeAdmin() {
  return (
    <div className="welcome-admin">
      <div className="welcome-admin-intro">
        <img src={require("../images/logo-white.png")} alt="logo" />
        <h2 className="welcome-admin-name">Welcome, Admin</h2>
      </div>
      <Link to="/">
        <button className="welcome-admin-logout">Log-Out</button>
      </Link>
    </div>
  );
}

export default WelcomeAdmin;
