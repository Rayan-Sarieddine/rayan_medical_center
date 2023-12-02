import React from "react";
import "./DoctorPage.css";
import Welcome from "./Components/Welcome/Welcome";
import DoctorPatients from "./Components/DoctorPatients/DoctorPatients";
import Medicine from "./Components/Medicine/Medicine";
import Appointments from "../PatientPage/Components/Appointments/Appointments";
function DoctorPage() {
  return (
    <div className="doctor-page">
      <Welcome />
      <DoctorPatients />
      <Medicine />
      <Appointments />
    </div>
  );
}

export default DoctorPage;
