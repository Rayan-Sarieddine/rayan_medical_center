import React, { useState } from "react";
import "./ViewPatients.css";
function ViewPatients({ allPatients }) {
  const [showViewPatientsBody, setShowViewPatientsBody] = useState(false);
  const toggleViewPatientsBody = () => {
    setShowViewPatientsBody(!showViewPatientsBody);
  };
  return (
    <div className="all-patients">
      <div className="all-patients_header">
        <h3>All Patients</h3>
        <div onClick={toggleViewPatientsBody}>&#9660;</div>
      </div>
      {showViewPatientsBody && (
        <div className="all-patients_body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image link</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Doctor</th>
                <th>Condition</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {allPatients.map((pt) => {
                return (
                  <tr key={pt.patient_id}>
                    <td>{pt.patient_id}</td>
                    <td>{pt.patient_name}</td>
                    <td>{pt.patient_img}</td>

                    <td>{pt.age}</td>
                    <td>{pt.gender}</td>
                    <td>{pt.doctor}</td>
                    <td>{pt.current_condition}</td>
                    <td>{pt.user_email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewPatients;
