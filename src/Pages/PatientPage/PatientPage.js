import React from "react";
import "./PatientPage.css";
import Welcome from "./Components/Welcome/Welcome";
import PatientInfo from "./Components/PatientInfo/PatientInfo";
import MedicalHistory from "./Components/MedicalHistory/MedicalHistory";
import Appointments from "./Components/Appointments/Appointments";
import BookAppointments from "./Components/BookAppointment/BookAppointments";
function PatientPage() {
  const patient = {
    patient_id: 0,
    patient_name: "Ahmad Mo",
    patient_img: "https://i.pravatar.cc/200?u=118836",
    age: 25,
    gender: "male",
    doctor: "Samir Senno",
    current_condition: "waiting surgury",
    room: 201,
    appointments: [
      "January 1, 2022 at 7:30 PM",
      "May 15, 2023 at 12:30 PM",
      "January 1, 2023 at 10:00 AM",
    ],
  };
  return (
    <div className="patient-page">
      <Welcome patient={patient} />
      <PatientInfo patient={patient} />
      <MedicalHistory patient={patient} />
      <Appointments patient={patient} />
      <BookAppointments patient={patient} />
    </div>
  );
}

export default PatientPage;
