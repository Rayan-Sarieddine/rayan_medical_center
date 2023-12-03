import React, { useState } from "react";
import "./UpdatePatient.css";
function UpdatePatient() {
  const [showUpdatePatientBody, setShowUpdatePatientBody] = useState(false);
  const toggleUpdatePatientBody = () => {
    setShowUpdatePatientBody(!showUpdatePatientBody);
  };

  const [UpdatePatientOption, setUpdatePatientOption] = useState("");

  const handleChangeUpdatePatient = (event) => {
    setUpdatePatientOption(event.target.value);
  };
  return (
    <div className="update-patient">
      <div className="update-patient_header">
        <h3>Update Patient's Info</h3>
        <div onClick={toggleUpdatePatientBody}>&#9660;</div>
      </div>
      {showUpdatePatientBody && ( // Renders the body if showBody is true
        <div className="update-patient_body">
          <div className="update-patient_box">
            <p>Update Patients:</p>
            <form>
              <div class="update-patient-input-group">
                <label for="patient_id">Patient ID: </label>
                <input
                  type="text"
                  id="patient_id"
                  name="patient_id"
                  placeholder="Enter Patient ID:"
                  required
                />
              </div>
              <div class="update-patient-input-group">
                <label for="patient_speciality">What are you Updating: </label>
                <select
                  value={UpdatePatientOption}
                  onChange={handleChangeUpdatePatient}
                >
                  <option value="">Select...</option>
                  <option value="patient_name">Name</option>
                  <option value="patient_image">Image Link</option>
                  <option value="age">Age</option>
                  <option value="gender">Gender</option>
                  <option value="doctor">Doctor</option>
                  <option value="current_condition">Condition</option>
                  <option value="email">email</option>
                  <option value="password">password</option>
                </select>
              </div>
              <div class="update-patient-input-group">
                <label for="patient_updated_value">Updated Value: </label>
                <input
                  type="email"
                  id="patient_updated_value"
                  name="patient_updated_value"
                  placeholder="Enter Updated Value:"
                  required
                />
              </div>

              <button type="update-patient-submit">Update</button>
              <p className="update-patient-warning"></p>
              <p className="update-patient-successful"></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatePatient;
