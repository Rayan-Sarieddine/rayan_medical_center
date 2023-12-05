import React, { useState, useEffect } from "react";
import "./PatientMedication.css";
import axios from "axios";
function PatientMedication({ doctor }) {
  const [showDoctorPatientsInfoBody, setShowDoctorPatientsInfoBody] =
    useState(false);
  const toggleDoctorPatientsInfoBody = () => {
    setShowDoctorPatientsInfoBody(!showDoctorPatientsInfoBody);
  };
  const data = { user_id: localStorage.getItem("user_id") };
  const [patientsMedication, setPatientsMedication] = useState(null);
  const [prescribedPatientId, setprescribedPatientId] = useState("");
  function submitPrescription(e) {
    e.preventDefault();
    let data = {
      patient_id: prescribedPatientId,
    };
    console.log(data);
    try {
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/getAllPrescriptions.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setPatientsMedication(response.data.prescriptions);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  }
  function handlechange(e, type) {
    switch (type) {
      case "id":
        setprescribedPatientId(e.target.value);
        break;
      default:
    }
  }
  function activate(id, medicine, date) {
    let data = {
      patient_id: id,
      medicine: medicine,
      date_of_prescription: date,
    };
    console.log(data);
    try {
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/activatePrescription.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  }
  function deactivate(id, medicine, date) {
    let data = {
      patient_id: id,
      medicine: medicine,
      date_of_prescription: date,
    };
    console.log(data);
    try {
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/deactivatePrescription.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  }
  return (
    <div className="doctor-patient-info">
      <div className="doctor-patient-info_header">
        <h3>
          Dr.
          {" " +
            doctor.split(" ")[0].charAt(0).toUpperCase() +
            doctor.split(" ")[0].slice(1).toLowerCase() +
            " "}
          Patient's Medication
        </h3>
        <div onClick={toggleDoctorPatientsInfoBody}>&#9660;</div>
      </div>
      {showDoctorPatientsInfoBody && ( // Renders the body if showBody is true
        <div className="doctor-patient-info_body">
          <form onSubmit={submitPrescription}>
            <div class="input-group">
              <label for="patient_id">Patient ID: </label>
              <input
                type="text"
                id="patient_id"
                name="patient_id"
                value={prescribedPatientId}
                onChange={(e) => {
                  handlechange(e, "id");
                }}
                placeholder="Enter Patient ID:"
                required
              />
            </div>

            <button type="submit">Check</button>

            <p className="medicine-successful">{}</p>
          </form>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Prescription</th>
                <th>Prescription details</th>
                <th>Date given</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {patientsMedication && (
                <>
                  {patientsMedication.map((patient) => (
                    <tr key={patient.patient_id}>
                      <td>{patient.patient_id}</td>
                      <td>{patient.medicine}</td>
                      <td>{patient.prescription_details}</td>
                      <td>{patient.date_of_prescription}</td>
                      <td>{patient.active_prescription}</td>
                      {patient.active_prescription === "yes" ? (
                        <button
                          onClick={() => {
                            deactivate(
                              patient.patient_id,
                              patient.medicine,
                              patient.date_of_prescription
                            );
                          }}
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            activate(
                              patient.patient_id,
                              patient.medicine,
                              patient.date_of_prescription
                            );
                          }}
                        >
                          Activate
                        </button>
                      )}
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PatientMedication;
