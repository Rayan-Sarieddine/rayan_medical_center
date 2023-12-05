import React, { useState, useEffect } from "react";
import "./DoctorPatients.css";
import axios from "axios";
function DoctorPatients({ doctor }) {
  const [showDoctorPatientsInfoBody, setShowDoctorPatientsInfoBody] =
    useState(false);
  const toggleDoctorPatientsInfoBody = () => {
    setShowDoctorPatientsInfoBody(!showDoctorPatientsInfoBody);
  };
  const data = { user_id: localStorage.getItem("user_id") };
  const [patients, setPatients] = useState(null);
  const fetchpatientsData = async () => {
    try {
      axios
        .post("https://localhost/rayan_care/allDoctorPatients.php", data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setPatients(response.data.patients_data);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  };
  useEffect(() => {
    fetchpatientsData();
  }, []);

  // const patients = [
  //   {
  //     patient_id: 0,
  //     patient_name: "Ahmad Mo",
  //     patient_img: "https://i.pravatar.cc/200?u=118836",
  //     age: 25,
  //     gender: "male",
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
  return (
    <div className="doctor-patient-info">
      <div className="doctor-patient-info_header">
        <h3>
          Dr.
          {" " +
            doctor.split(" ")[0].charAt(0).toUpperCase() +
            doctor.split(" ")[0].slice(1).toLowerCase() +
            " "}
          Patients
        </h3>
        <div onClick={toggleDoctorPatientsInfoBody}>&#9660;</div>
      </div>
      {showDoctorPatientsInfoBody && ( // Renders the body if showBody is true
        <div className="doctor-patient-info_body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Last Condition</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.patient_id}>
                  <td>{patient.patient_id}</td>
                  <td>{patient.patient_name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>patient.current_condition</td>
                  <td>{patient.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DoctorPatients;
