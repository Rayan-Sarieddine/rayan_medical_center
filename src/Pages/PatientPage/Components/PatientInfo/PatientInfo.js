import React, { useState } from "react";
import "./PatientInfo.css";
function PatientInfo({ patient }) {
  const [showPatientInfoBody, setShowPatientInfoBody] = useState(false);
  const togglePatientInfoBody = () => {
    setShowPatientInfoBody(!showPatientInfoBody);
  };
  return (
    <div className="patient-info">
      <div className="patient-info_header">
        <h3>
          {patient.patient_name.split(" ")[0].charAt(0).toUpperCase() +
            patient.patient_name.split(" ")[0].slice(1).toLowerCase()}
          's Info
        </h3>
        <div onClick={togglePatientInfoBody}>&#9660;</div>
      </div>
      {showPatientInfoBody && ( // Renders the body if showBody is true
        <div className="patient-info_body">
          <img src={patient.patient_img} alt={patient.patient_name} />
          <div className="info-item">
            <p className="info-item_title">Name: </p>
            <p className="info-item_value">{patient.patient_name}</p>
          </div>
          <div className="info-item">
            <p className="info-item_title">Age: </p>
            <p className="info-item_value">{patient.age}</p>
          </div>
          <div className="info-item">
            <p className="info-item_title">Gender: </p>
            <p className="info-item_value">{patient.gender}</p>
          </div>
          <div className="info-item">
            <p className="info-item_title">Room: </p>
            <p className="info-item_value">{patient.room}</p>
          </div>
          <div className="info-item">
            <p className="info-item_title">Doctor: </p>
            <p className="info-item_value">{patient.doctor}</p>
          </div>
          <div className="info-item">
            <p className="info-item_title">Current Condition: </p>
            <p className="info-item_value">{patient.current_condition}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientInfo;
