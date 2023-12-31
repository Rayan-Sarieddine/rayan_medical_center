import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
function Welcome({ patient }) {
  return (
    <div className="welcome">
      <div className="welcome-intro">
        <Link to="/">
          <img src={require("../images/logo-white.png")} alt="logo" />
        </Link>
        <h2 className="welcome-name">
          Welcome,{" "}
          {patient.patient_name.split(" ")[0].charAt(0).toUpperCase() +
            patient.patient_name.split(" ")[0].slice(1).toLowerCase()}
          .
        </h2>
      </div>
      <img src={patient.patient_img} alt={patient.patient_name} />
    </div>
  );
}

export default Welcome;
