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
    // Fetch doctors data when the component mounts
    fetchDoctorsData();
    fetchPatientsData();
    fetchRoomssData();
  }, []);
  //fetch dr data
  const fetchDoctorsData = async () => {
    // Make a request to your PHP endpoint
    try {
      const response1 = await axios.get(
        "https://localhost/rayan_care/allDoctors.php"
      );

      console.log(response1.data.patients_data);
      // Handle the response containing doctors' data
      if (response1.data.doctors_data) {
        setDoctors(response1.data.doctors_data);
      } else {
        // Handle case where no doctors are found
        console.log("No doctors found");
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching doctors:", error);
    }
  };
  //fetch patient data
  const fetchPatientsData = async () => {
    // Make a request to your PHP endpoint
    try {
      const response2 = await axios.get(
        "https://localhost/rayan_care/allPatients.php"
      );

      console.log(response2.data.patients_data);
      // Handle the response containing patients' data
      if (response2.data.patients_data) {
        setPatients(response2.data.patients_data);
      } else {
        // Handle case where no patients are found
        console.log("No patients found");
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching patients:", error);
    }
  };
  //fetch room data
  const fetchRoomssData = async () => {
    // Make a request to PHP endpoint
    try {
      const response3 = await axios.get(
        "https://localhost/rayan_care/allRooms.php"
      );

      console.log(response3.data.rooms_data);
      // Handle the response containing rooms' data
      if (response3.data.rooms_data) {
        setRooms(response3.data.rooms_data);
      } else {
        // Handle case where no rooms are found
        console.log("No rooms found");
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching rooms:", error);
    }
  };
  // useEffect(() => {
  //   console.log(allDoctors);
  // }, [allDoctors]);
  // //x
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
