import React from "react";
import "./AdminPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
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
  const [allDoctors, setDoctors] = useState([]);
  const [allPatients, setPatients] = useState([]);
  const [allRooms, setRooms] = useState([]);

  useEffect(() => {
    fetchDoctorsData();
    fetchPatientsData();
    fetchRoomssData();
  }, []);

  const fetchDoctorsData = async () => {
    try {
      const response1 = await axios.get(
        "https://localhost/rayan_medical_center/back_end/allDoctors.php"
      );

      if (response1.data.doctors_data) {
        setDoctors(response1.data.doctors_data);
      } else {
        console.log("No doctors found");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const fetchPatientsData = async () => {
    try {
      const response2 = await axios.get(
        "https://localhost/rayan_medical_center/back_end/allPatients.php"
      );

      if (response2.data.patients_data) {
        setPatients(response2.data.patients_data);
      } else {
        console.log("No patients found");
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const fetchRoomssData = async () => {
    try {
      const response3 = await axios.get(
        "https://localhost/rayan_medical_center/back_end/allRooms.php"
      );

      if (response3.data.rooms_data) {
        setRooms(response3.data.rooms_data);
      } else {
        console.log("No rooms found");
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  // const allPatients = [
  //   {
  //     id: 0,
  //     patient_name: "Ahmad Mo",
  //     patient_img: "https://i.pravatar.cc/200?u=118836",
  //     age: 25,
  //     gender: "male",
  //     email: "Ahmad@gmail.com",
  //     doctor: "Samir Senno",
  //     current_condition: [
  //       "checked in with unjured knee",
  //       "waiting surgury for knee injury",
  //     ],
  //     room: 201,
  //     appointments: [
  //       "January 1, 2022 at 7:30 PM",
  //       "May 15, 2023 at 12:30 PM",
  //       "January 1, 2024 at 10:00 AM",
  //     ],
  //   },
  // ];
  // const allDoctors = [
  //   {
  //     id: 1,
  //     email: "charbel@gmail.com",
  //     doctor_name: "Charbel Massoud",
  //     speciality: "heart",
  //     patients: [0, 1, 2],
  //     appointments: [
  //       "January 1, 2022 at 7:30 PM",
  //       "May 15, 2023 at 12:30 PM",
  //       "January 1, 2024 at 10:00 AM",
  //     ],
  //   },
  // ];
  // const allRooms = [
  //   {
  //     id: 0,
  //     room_number: 201,
  //     room_floor: 3,
  //     room_capacity: 2,
  //     room_patients: ["Ahmad Ball", "Sami Labeeb"],
  //   },
  // ];
  return (
    <div className="admin-page">
      <WelcomeAdmin />
      <ViewDoctors allDoctors={allDoctors} />
      <AddDoctors />
      <UpdateDoctor />
      <ViewPatients allPatients={allPatients} />
      <AddPatients />
      <UpdatePatient />
      <ViewRooms allRooms={allRooms} />
      <AssignRoom />
    </div>
  );
}

export default AdminPage;
