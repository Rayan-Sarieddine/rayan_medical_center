import React, { useState } from "react";
import "./AddPatients.css";
function AddPatients() {
  const [showAddPatientBody, setShowAddPatientBody] = useState(false);
  const toggleAddPatientBody = () => {
    setShowAddPatientBody(!showAddPatientBody);
  };
  return (
    <div className="add-patient">
      <div className="add-patient_header">
        <h3>Add a Patient</h3>
        <div onClick={toggleAddPatientBody}>&#9660;</div>
      </div>
      {showAddPatientBody && ( // Renders the body if showBody is true
        <div className="add-patient_body">
          <div className="add-patient_box">
            <p>Add Patients:</p>
            <form>
              <div class="add-patient-input-group">
                <label for="patient_name">Patient name: </label>
                <input
                  type="text"
                  id="patient_name"
                  name="patient_name"
                  placeholder="Enter Patient Name:"
                  required
                />
              </div>
              <div class="add-patient-input-group">
                <label for="patient_imagelink">Image link: </label>
                <input
                  type="text"
                  id="patient_imagelink"
                  name="patient_imagelink"
                  placeholder="Enter Patient Speciality:"
                  required
                />
              </div>
              <div class="add-patient-input-group">
                <label for="patient_age">Age: </label>
                <input
                  type="text"
                  id="patient_age"
                  name="patient_age"
                  placeholder="Enter Patient Age:"
                  required
                />
              </div>
              <div class="add-patient-input-group">
                <label for="patient_gender">Gender: </label>
                <input
                  type="text"
                  id="patient_gender"
                  name="patient_gender"
                  placeholder="Enter Patient Gender:"
                  required
                />
              </div>
              <div class="add-patient-input-group">
                <label for="patient_doctor">Doctor: </label>
                <input
                  type="text"
                  id="patient_doctor"
                  name="patient_doctor"
                  placeholder="Enter Patient Doctor:"
                  required
                />
              </div>
              <div class="add-patient-input-group">
                <label for="patient_current_condition">
                  Current Condition:{" "}
                </label>
                <input
                  type="text"
                  id="patient_current_condition"
                  name="patient_current_condition"
                  placeholder="Enter Patient Current Condition:"
                  required
                />
              </div>
              <div class="add-patient-input-group">
                <label for="patient_email">Email: </label>
                <input
                  type="email"
                  id="patient_email"
                  name="patient_email"
                  placeholder="Enter Patient Email:"
                  required
                />
              </div>
              <div class="add-patient-input-group">
                <label for="patient_password">Patient Password: </label>
                <input
                  type="password"
                  id="patient_password"
                  name="patient_password"
                  placeholder="Enter Patient Password:"
                  required
                />
              </div>

              <button type="add-patient-submit">Add</button>
              <p className="add-patient-warning"></p>
              <p className="add-patient-successful"></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPatients;
