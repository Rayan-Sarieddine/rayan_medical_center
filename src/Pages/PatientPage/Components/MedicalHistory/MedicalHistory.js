import React, { useState, useEffect } from "react";
import "./MedicalHistory.css";
import axios from "axios";
function MedicalHistory({ patient }) {
  const [showMedicalHistoryBody, setShowMedicalHistoryBody] = useState(false);
  const data = { user_id: localStorage.getItem("user_id") };
  const [medicalHistory, setMedicalHistory] = useState(null);
  const toggleMedicalHistoryBody = () => {
    setShowMedicalHistoryBody(!showMedicalHistoryBody);
  };
  const fetchMedicalHistory = async () => {
    try {
      axios
        .post("https://localhost/rayan_care/medicalHistory.php", data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setMedicalHistory(response.data.medical_data);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  };
  useEffect(() => {
    fetchMedicalHistory();
  }, []);
  return (
    <div className="medical-history">
      {medicalHistory && (
        <>
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
              {medicalHistory.map((con, ind) => {
                return (
                  <p className="medical-condition">
                    {ind + 1}- {con.patient_condition} on {con.date_of_add}
                  </p>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default MedicalHistory;
