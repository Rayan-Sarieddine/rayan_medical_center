import React, { useState } from "react";
import "./UpdateDoctor.css";
function UpdateDoctor() {
  const [showUpdateDoctorBody, setShowUpdateDoctorBody] = useState(false);
  const toggleUpdateDoctorBody = () => {
    setShowUpdateDoctorBody(!showUpdateDoctorBody);
  };

  const [UpdateDoctorOption, setUpdateDoctorOption] = useState("");

  const handleChangeUpdateDoctor = (event) => {
    setUpdateDoctorOption(event.target.value);
  };
  return (
    <div className="update-doctor">
      <div className="update-doctor_header">
        <h3>Update Doctor's Info</h3>
        <div onClick={toggleUpdateDoctorBody}>&#9660;</div>
      </div>
      {showUpdateDoctorBody && ( // Renders the body if showBody is true
        <div className="update-doctor_body">
          <div className="update-doctor_box">
            <p>Update Doctors:</p>
            <form>
              <div class="update-doctor-input-group">
                <label for="doctor_id">Doctor ID: </label>
                <input
                  type="text"
                  id="doctor_id"
                  name="doctor_id"
                  placeholder="Enter Doctor ID:"
                  required
                />
              </div>
              <div class="update-doctor-input-group">
                <label for="doctor_speciality">What are you Updating: </label>
                <select
                  value={UpdateDoctorOption}
                  onChange={handleChangeUpdateDoctor}
                >
                  <option value="">Select...</option>
                  <option value="doctor_name">Name</option>
                  <option value="speciality">speciality</option>
                  <option value="email">email</option>
                  <option value="password">password</option>
                </select>
              </div>
              <div class="update-doctor-input-group">
                <label for="doctor_updated_value">Updated Value: </label>
                <input
                  type="email"
                  id="doctor_updated_value"
                  name="doctor_updated_value"
                  placeholder="Enter Updated Value:"
                  required
                />
              </div>

              <button type="update-doctor-submit">Update</button>
              <p className="update-doctor-warning"></p>
              <p className="update-doctor-successful"></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateDoctor;
