import React from "react";
import "./PatientPage.css";
import Welcome from "./Components/Welcome/Welcome";
import PatientInfo from "./Components/PatientInfo/PatientInfo";
import MedicalHistory from "./Components/MedicalHistory/MedicalHistory";
import Appointments from "./Components/Appointments/Appointments";
import BookAppointments from "./Components/BookAppointment/BookAppointments";
function PatientPage() {
  return (
    <div className="patient-page">
      <Welcome />
      <PatientInfo />
      <MedicalHistory />
      <Appointments />
      <BookAppointments />
    </div>
  );
}

export default PatientPage;
