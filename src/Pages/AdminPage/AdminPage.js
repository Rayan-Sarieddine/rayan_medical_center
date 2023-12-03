import React from "react";
import "./AdminPage.css";
import WelcomeAdmin from "./Components/WelcomeAdmin/WelcomeAdmin";
import AddDoctors from "./Components/AddDoctors/AddDoctors";
import ViewDoctors from "./Components/ViewDoctors/ViewDoctors";
import UpdateDoctor from "./Components/UpdateDoctor/UpdateDoctor";
import ViewPatients from "./Components/ViewPatients/ViewPatients";
import AddPatients from "./Components/AddPatients/AddPatients";
import UpdatePatient from "./Components/UpdatePatient/UpdatePatient";
import ViewRooms from "./Components/ViewRooms/ViewRooms";
import AssignRoom from "./Components/AssignRoom/AssignRoom";
function AdminPage() {
  const allPatients = [
    {
      id: 0,
      patient_name: "Ahmad Mo",
      patient_img: "https://i.pravatar.cc/200?u=118836",
      age: 25,
      gender: "male",
      email: "Ahmad@gmail.com",
      doctor: "Samir Senno",
      current_condition: [
        "checked in with unjured knee",
        "waiting surgury for knee injury",
      ],
      room: 201,
      appointments: [
        "January 1, 2022 at 7:30 PM",
        "May 15, 2023 at 12:30 PM",
        "January 1, 2024 at 10:00 AM",
      ],
    },
  ];
  const allDoctors = [
    {
      id: 1,
      email: "charbel@gmail.com",
      doctor_name: "Charbel Massoud",
      speciality: "heart",
      patients: [0, 1, 2],
      appointments: [
        "January 1, 2022 at 7:30 PM",
        "May 15, 2023 at 12:30 PM",
        "January 1, 2024 at 10:00 AM",
      ],
    },
  ];

  return (
    <div className="admin-page">
      <WelcomeAdmin />
      <ViewDoctors allDoctors={allDoctors} />
      <AddDoctors />
      <UpdateDoctor />
      <ViewPatients allPatients={allPatients} />
      <AddPatients />
      <UpdatePatient />
      <ViewRooms />
      <AssignRoom />
    </div>
  );
}

export default AdminPage;
