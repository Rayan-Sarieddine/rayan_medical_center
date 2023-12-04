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
      {showViewDoctorsBody && (
        <div className="all-doctors_body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>speciality</th>
                <th>email</th>
                <th>password</th>
                {/* <th>Number of Patients</th> */}
              </tr>
            </thead>
            <tbody>
              {allDoctors.map((dr) => {
                return (
                  <tr key={dr.doctor_id}>
                    <td>{dr.doctor_id}</td>
                    <td>{dr.doctor_name}</td>
                    <td>{dr.speciality}</td>
                    <td>{dr.user_email}</td>
                    <td>{dr.user_password}</td>
                    {/* <td>{dr.patients.length}</td> */}
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
