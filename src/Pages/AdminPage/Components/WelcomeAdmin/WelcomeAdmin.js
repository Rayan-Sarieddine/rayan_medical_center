import React from "react";
import "./WelcomeAdmin.css";
function WelcomeAdmin() {
  return (
    <div className="welcome-admin">
      <div className="welcome-admin-intro">
        <img src={require("../images/logo-white.png")} alt="logo" />
        <h2 className="welcome-admin-name">Welcome, Admin</h2>
      </div>
      <button className="welcome-admin-logout">Log-Out</button>
    </div>
  );
}

export default WelcomeAdmin;
