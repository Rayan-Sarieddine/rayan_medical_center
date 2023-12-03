import React from "react";
import "./WelcomeDr.css";
function WelcomeDr({ doctor }) {
  return (
    <div className="welcome-dr">
      <div className="welcome-dr-intro">
        <img src={require("../images/logo-white.png")} alt="logo" />
        <h2 className="welcome-dr-name">
          Welcome,{" Dr. "}
          {doctor.doctor_name.split(" ")[0].charAt(0).toUpperCase() +
            doctor.doctor_name.split(" ")[0].slice(1).toLowerCase()}
          .
        </h2>
      </div>
      <button className="welcome-dr-logout">Log-Out</button>
    </div>
  );
}

export default WelcomeDr;
