import React from "react";
import "./DoctorPage.css";
import WelcomeDr from "./Components/WelcomeDr/WelcomeDr";
import DoctorPatients from "./Components/DoctorPatients/DoctorPatients";
import Medicine from "./Components/Medicine/Medicine";
import Appointments from "./Components/Appointments/Appointments";
function DoctorPage() {
  const doctor = {
    doctor_name: "Charbel Massoud",
    speciality: "heart",
    patients: [0, 1, 2],
    appointments: [
      "January 1, 2022 at 7:30 PM",
      "May 15, 2023 at 12:30 PM",
      "January 1, 2024 at 10:00 AM",
    ],
  };
  return (
    <div className="doctor-page">
      <WelcomeDr doctor={doctor} />
      <DoctorPatients doctor={doctor} />
      <Medicine doctor={doctor} />
      <Appointments doctor={doctor} />
    </div>
  );
}

export default DoctorPage;
