import React, { useEffect, useState } from "react";
import "./PatientPage.css";
import Welcome from "./Components/Welcome/Welcome";
import PatientInfo from "./Components/PatientInfo/PatientInfo";
import MedicalHistory from "./Components/MedicalHistory/MedicalHistory";
import Appointments from "./Components/Appointments/Appointments";
import BookAppointments from "./Components/BookAppointment/BookAppointments";
import axios from "axios";
function PatientPage() {
  const data = { user_id: localStorage.getItem("user_id") };
  const [patient, setPatient] = useState(null);
  const fetchpatientData = async () => {
    try {
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/getPatient.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setPatient(response.data.patientData);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  };
  useEffect(() => {
    fetchpatientData();
  }, []);
  // const patient = {
  //   patient_id: 0,
  //   patient_name: "Ahmad Mo",
  //   patient_img: "https://i.pravatar.cc/200?u=118836",
  //   age: 25,
  //   gender: "male",
  //   doctor: "Samir Senno",
  //   current_condition: [
  //     "checked in with unjured knee",
  //     "waiting surgury for knee injury",
  //   ],
  //   room: 201,
  //   appointments: [
  //     "January 1, 2022 at 7:30 PM",
  //     "May 15, 2023 at 12:30 PM",
  //     "January 1, 2024 at 10:00 AM",
  //   ],
  // };
  return (
    <div className="patient-page">
      {patient && (
        <>
          <Welcome patient={patient} />
          <PatientInfo patient={patient} />
          <MedicalHistory patient={patient} />
          <Appointments patient={patient} />
          <BookAppointments patient={patient} />
        </>
      )}
    </div>
  );
}

export default PatientPage;
