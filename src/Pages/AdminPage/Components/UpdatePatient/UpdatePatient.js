import React, { useState } from "react";
import "./UpdatePatient.css";
import axios from "axios";
function UpdatePatient() {
  const [showUpdatePatientBody, setShowUpdatePatientBody] = useState(false);
  const toggleUpdatePatientBody = () => {
    setShowUpdatePatientBody(!showUpdatePatientBody);
  };

  const [updatedPatientValue, setUpdatedPatientValue] = useState("");
  const [updatedPatientparam, setUpdatedPatientParam] = useState("");
  const [updatedPatientId, setupdatedPatientId] = useState("");
  const [updatePatientMsg, setUpdatePatientMsg] = useState("");
  const [updatePatientError, setUpdatePatientError] = useState("");

  function handleInputChange(e, type) {
    switch (type) {
      case "param":
        setUpdatedPatientParam(e.target.value);
        break;
      case "value":
        setUpdatedPatientValue(e.target.value);
        break;
      case "id":
        setupdatedPatientId(e.target.value);
        break;

      default:
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      param: updatedPatientparam,
      value: updatedPatientValue,
      id: updatedPatientId,
    };
    sendData(data);
  }
  function sendData(data) {
    axios
      .post("https://localhost/rayan_care/updatePatient.php", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.message === "doctor Updated") {
          setUpdatePatientMsg("Updated");
          reset();
        } else {
          setUpdatePatientError(response.data.message);
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function reset() {
    setUpdatedPatientParam("");
    setUpdatedPatientValue("");
    setupdatedPatientId("");

    setTimeout(() => {
      setUpdatePatientMsg("");
      setUpdatePatientError("");
    }, 3000);
  }
  return (
    <div className="update-patient">
      <div className="update-patient_header">
        <h3>Update Patient's Info</h3>
        <div onClick={toggleUpdatePatientBody}>&#9660;</div>
      </div>
      {showUpdatePatientBody && (
        <div className="update-patient_body">
          <div className="update-patient_box">
            <p>Update Patients:</p>
            <form on onSubmit={handleSubmit}>
              <div className="update-patient-input-group">
                <label htmlFor="patient_id">Patient ID: </label>
                <input
                  type="text"
                  id="patient_id"
                  value={updatedPatientId}
                  onChange={(e) => handleInputChange(e, "id")}
                  name="patient_id"
                  placeholder="Enter Patient ID:"
                  required
                />
              </div>
              <div className="update-patient-input-group">
                <label htmlFor="patient_speciality">
                  What are you Updating:{" "}
                </label>
                <select
                  value={updatedPatientparam}
                  onChange={(e) => handleInputChange(e, "param")}
                >
                  <option value="">Select...</option>
                  <option value="patient_name">Name</option>
                  <option value="patient_image">Image Link</option>
                  <option value="age">Age</option>
                  <option value="gender">Gender</option>
                  <option value="doctor">Doctor</option>
                  <option value="current_condition">Condition</option>
                  <option value="user_email">Email</option>
                  <option value="user_password">Password</option>
                </select>
              </div>
              <div className="update-patient-input-group">
                <label htmlFor="patient_updated_value">Updated Value: </label>
                <input
                  type="text"
                  id="patient_updated_value"
                  name="patient_updated_value"
                  value={updatedPatientValue}
                  onChange={(e) => handleInputChange(e, "value")}
                  placeholder="Enter Updated Value:"
                  required
                />
              </div>

              <button type="submit" className="update-patient-submit">
                Update
              </button>
              <p className="update-patient-warning">{updatePatientError}</p>
              <p className="update-patient-successful">{updatePatientMsg}</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatePatient;
