import React, { useState } from "react";
import "./AddDoctors.css";
function AddDoctors() {
  const [showAddDoctorBody, setShowAddDoctorBody] = useState(false);
  const toggleAddDoctorBody = () => {
    setShowAddDoctorBody(!showAddDoctorBody);
  };
  return (
    <div className="add-doctor">
      <div className="add-doctor_header">
        <h3>Add a Doctor</h3>
        <div onClick={toggleAddDoctorBody}>&#9660;</div>
      </div>
      {showAddDoctorBody && ( // Renders the body if showBody is true
        <div className="add-doctor_body">
          <div className="add-doctor_box">
            <p>Add Doctors:</p>
            <form>
              <div class="add-doctor-input-group">
                <label for="doctor_name">Doctor name: </label>
                <input
                  type="text"
                  id="doctor_name"
                  name="doctor_name"
                  placeholder="Enter Doctor Name:"
                  required
                />
              </div>
              <div class="add-doctor-input-group">
                <label for="doctor_speciality">Doctor Speciality: </label>
                <input
                  type="text"
                  id="doctor_speciality"
                  name="doctor_speciality"
                  placeholder="Enter Doctor Speciality:"
                  required
                />
              </div>
              <div class="add-doctor-input-group">
                <label for="doctor_email">Doctor Email: </label>
                <input
                  type="email"
                  id="doctor_email"
                  name="doctor_email"
                  placeholder="Enter Doctor Email:"
                  required
                />
              </div>
              <div class="add-doctor-input-group">
                <label for="doctor_password">Doctor Password: </label>
                <input
                  type="password"
                  id="doctor_password"
                  name="doctor_password"
                  placeholder="Enter Doctor Password:"
                  required
                />
              </div>

              <button type="add-doctor-submit">Add</button>
              <p className="add-doctor-warning"></p>
              <p className="add-doctor-successful"></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddDoctors;
