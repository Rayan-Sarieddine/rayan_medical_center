import React, { useState } from "react";
import "./DoctorPatients.css";
function DoctorPatients({ doctor }) {
  const [showDoctorPatientsInfoBody, setShowDoctorPatientsInfoBody] =
    useState(false);
  const toggleDoctorPatientsInfoBody = () => {
    setShowDoctorPatientsInfoBody(!showDoctorPatientsInfoBody);
  };
  const patients = [
    {
      patient_id: 0,
      patient_name: "Ahmad Mo",
      patient_img: "https://i.pravatar.cc/200?u=118836",
      age: 25,
      gender: "male",
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
  return (
    <div className="doctor-patient-info">
      <div className="doctor-patient-info_header">
        <h3>
          Dr.
          {" " +
            doctor.doctor_name.split(" ")[0].charAt(0).toUpperCase() +
            doctor.doctor_name.split(" ")[0].slice(1).toLowerCase() +
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
                  <td>
                    {
                      patient.current_condition[
                        patient.current_condition.length - 1
                      ]
                    }
                  </td>
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
