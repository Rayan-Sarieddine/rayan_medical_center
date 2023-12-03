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
  return (
    <div className="admin-page">
      <WelcomeAdmin />
      <ViewDoctors />
      <AddDoctors />
      <UpdateDoctor />
      <ViewPatients />
      <AddPatients />
      <UpdatePatient />
      <ViewRooms />
      <AssignRoom />
    </div>
  );
}

export default AdminPage;
