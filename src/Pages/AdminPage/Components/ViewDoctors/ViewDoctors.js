import React, { useState } from "react";
import "./ViewDoctors.css";
function ViewDoctors({ allDoctors }) {
  const [showViewDoctorsBody, setShowViewDoctorsBody] = useState(false);
  const toggleViewDoctorsBody = () => {
    setShowViewDoctorsBody(!showViewDoctorsBody);
  };
  return (
    <div className="all-doctors">
      <div className="all-doctors_header">
        <h3>All Doctors</h3>
        <div onClick={toggleViewDoctorsBody}>&#9660;</div>
      </div>
      {showViewDoctorsBody && ( // Renders the body if showBody is true
        <div className="all-doctors_body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>speciality</th>
                <th>Number of Patients</th>
              </tr>
            </thead>
            <tbody>
              {allDoctors.map((dr) => {
                return (
                  <tr key={dr.id}>
                    <td>{dr.id}</td>
                    <td>{dr.doctor_name}</td>
                    <td>{dr.speciality}</td>
                    <td>{dr.patients.length}</td>
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

export default ViewDoctors;
