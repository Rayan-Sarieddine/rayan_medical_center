import React, { useState, useEffect } from "react";
import "./MedicalHistory.css";
import axios from "axios";
function MedicalHistory({ patient }) {
  const [showMedicalHistoryBody, setShowMedicalHistoryBody] = useState(false);
  const data = { user_id: localStorage.getItem("user_id") };
  const [medicalHistory, setMedicalHistory] = useState(null);
  const [medicineHistory, setMedicineHistory] = useState(null);
  const toggleMedicalHistoryBody = () => {
    setShowMedicalHistoryBody(!showMedicalHistoryBody);
  };
  const fetchMedicalHistory = async () => {
    try {
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/medicalHistory.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.condition_data.length > 0) {
            setMedicalHistory(response.data.condition_data);
          }

          if (response.data.medication_data.length > 0) {
            setMedicineHistory(response.data.medication_data);
          }
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
      <div className="medical-history_header">
        <h3>
          {patient.patient_name.split(" ")[0].charAt(0).toUpperCase() +
            patient.patient_name.split(" ")[0].slice(1).toLowerCase()}
          's Medical History
        </h3>
        <div onClick={toggleMedicalHistoryBody}>&#9660;</div>
      </div>

      <>
        {showMedicalHistoryBody && (
          <div className="medical-history_body">
            <p className="medical-header">Condition History:</p>
            {medicalHistory && (
              <>
                {medicalHistory.map((con, ind) => {
                  return (
                    <p className="medical-condition">
                      {ind + 1}- {con.patient_condition} on {con.date_of_add}
                    </p>
                  );
                })}
              </>
            )}
            <p className="medical-header">Medicine Prescription History:</p>;
            {medicalHistory && (
              <>
                {medicineHistory.map((med, ind) => {
                  return (
                    <p className="medical-condition">
                      {ind + 1}- You were Prescribed Medicine "{med.medicine}"
                      on {med.date_of_prescription} with the following
                      instructions:
                      <br></br>
                      &emsp;
                      {med.prescription_details}.<br></br>
                      &emsp; This priscription is{" "}
                      {med.active_prescription === "yes"
                        ? "still active"
                        : "no longer active"}
                    </p>
                  );
                })}
              </>
            )}
          </div>
        )}
      </>
    </div>
  );
}

export default MedicalHistory;
