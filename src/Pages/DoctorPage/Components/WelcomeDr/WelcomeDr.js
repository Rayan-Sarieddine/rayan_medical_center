import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WelcomeDr.css";

function WelcomeDr({ doctor }) {
  return (
    <div className="welcome-dr">
      <div className="welcome-dr-intro">
        <img src={require("../images/logo-white.png")} alt="logo" />
        <h2 className="welcome-dr-name">
          Welcome,{" Dr. "}
          {doctor.split(" ")[0].charAt(0).toUpperCase() +
            doctor.split(" ")[0].slice(1).toLowerCase()}
          .
        </h2>
      </div>
      <Link to="/">
        <button className="welcome-dr-logout">Log-Out</button>
      </Link>
    </div>
  );
}

export default WelcomeDr;
