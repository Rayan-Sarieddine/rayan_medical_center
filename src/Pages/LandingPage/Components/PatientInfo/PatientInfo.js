import React from "react";
import "./PatientInfo.css";
function PatientInfo() {
  return (
    <div className="patient-info-1">
      <div className="container-title">
        <span className="title">The Patient Process</span>
        <h2 className="title-explain">
          Sign in as a Patient and get the service you want!
        </h2>
      </div>

      <div className="steps">
        <div className="step-text">
          <p className="step-number">01</p>
          <h3 className="step-title">Your Info</h3>
          <p className="step-description">
            Be able to see your information including the medical history ehich
            is managed by your doctor.
          </p>
        </div>

        <div className="step-img">
          <img src={require("../images/pt1.png")} alt="step" />
        </div>
      </div>
      <div className="steps">
        <div className="step-img">
          <img src={require("../images/pt2.png")} alt="step" />
        </div>

        <div className="step-text">
          <p className="step-number">02</p>
          <h3 className="step-title">Your Appointments</h3>
          <p className="step-description">
            See your previous, cuurent and future appointments with your doctor
            and be able to book more!
          </p>
        </div>
      </div>
    </div>
  );
}

export default PatientInfo;
