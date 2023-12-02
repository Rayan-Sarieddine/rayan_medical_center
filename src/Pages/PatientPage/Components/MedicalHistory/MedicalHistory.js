import React, { useState } from "react";
import "./MedicalHistory.css";
function MedicalHistory({ patient }) {
  const [showMedicalHistoryBody, setShowMedicalHistoryBody] = useState(false);
  const toggleMedicalHistoryBody = () => {
    setShowMedicalHistoryBody(!showMedicalHistoryBody);
  };
  return (
    <div className="medical-history">
      <div className="medical-history_header">
        <h3>
          {patient.patient_name.split(" ")[0].charAt(0).toUpperCase() +
            patient.patient_name.split(" ")[0].slice(1).toLowerCase()}
          's Medical History
        </h3>
        <div onClick={toggleMedicalHistoryBody}>&#9660;</div>
      </div>
      {showMedicalHistoryBody && (
        <div className="medical-history_body">
          {patient.current_condition.map((con, ind) => {
            return (
              <p className="medical-condition">
                {ind + 1}- {con}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MedicalHistory;
