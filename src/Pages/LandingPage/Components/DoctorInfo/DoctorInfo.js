import React from "react";
import "./DoctorInfo.css";
function DoctorInfo() {
  return (
    <div className="doctor-info">
      <div className="container-title">
        <span className="title">The Doctor Process</span>
        <h2 className="title-explain">
          Sign in as a Doctor and easily Manage your work
        </h2>
      </div>

      <div className="steps">
        <div className="step-text">
          <p className="step-number">01</p>
          <h3 className="step-title">See all patients</h3>
          <p className="step-description">
            Be able to see al of your patients and manage them each case at a
            time!
          </p>
        </div>

        <div className="step-img">
          <img src={require("../images/dr1.png")} alt="step" />
        </div>
      </div>
      <div className="steps">
        <div className="step-img">
          <img src={require("../images/dr2.png")} alt="step" />
        </div>

        <div className="step-text">
          <p className="step-number">02</p>
          <h3 className="step-title">Prescribe</h3>
          <p className="step-description">
            Prescribe medicine for your patients in an easy and fast way!
          </p>
        </div>
      </div>
      <div className="steps">
        <div className="step-text">
          <p className="step-number">03</p>
          <h3 className="step-title">Manage Appointments</h3>
          <p className="step-description">
            See all of your requested appointments from your patients and manage
            them(accept, reject, finish)
          </p>
        </div>

        <div className="step-img">
          <img src={require("../images/dr3.png")} alt="step" />
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;
