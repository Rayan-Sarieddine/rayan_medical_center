import React, { useState } from "react";
import "./UpdateDoctor.css";
import axios from "axios";
function UpdateDoctor() {
  const [showUpdateDoctorBody, setShowUpdateDoctorBody] = useState(false);
  const toggleUpdateDoctorBody = () => {
    setShowUpdateDoctorBody(!showUpdateDoctorBody);
  };

  const [updatedValue, setUpdatedValue] = useState("");
  const [updatedparam, setUpdatedParam] = useState("");
  const [updatedDoctorId, setUpdatedDoctorId] = useState("");
  const [updateDoctorMsg, setUpdateDoctorMsg] = useState("");
  const [updateDoctorError, setUpdateDoctorError] = useState("");

  function handleInputChange(e, type) {
    switch (type) {
      case "param":
        setUpdatedParam(e.target.value);
        break;
      case "value":
        setUpdatedValue(e.target.value);
        break;
      case "id":
        setUpdatedDoctorId(e.target.value);
        break;

      default:
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      param: updatedparam,
      value: updatedValue,
      id: updatedDoctorId,
    };
    sendData(data);
  }
  function sendData(data) {
    axios
      .post("https://localhost/rayan_care/updateDoctor.php", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.message === "doctor Updated") {
          setUpdateDoctorMsg("Updated");
          reset();
        } else {
          setUpdateDoctorError(response.data.message);
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function reset() {
    setUpdatedParam("");
    setUpdatedValue("");

    setTimeout(() => {
      setUpdateDoctorMsg("");
      setUpdateDoctorError("");
    }, 3000);
  }
  return (
    <div className="update-doctor">
      <div className="update-doctor_header">
        <h3>Update Doctor's Info</h3>
        <div onClick={toggleUpdateDoctorBody}>&#9660;</div>
      </div>
      {showUpdateDoctorBody && (
        <div className="update-doctor_body">
          <div className="update-doctor_box">
            <p>Update Doctors:</p>
            <form onSubmit={handleSubmit}>
              <div className="update-doctor-input-group">
                <label htmlFor="doctor_id">Doctor ID: </label>
                <input
                  type="text"
                  id="doctor_id"
                  value={updatedDoctorId}
                  onChange={(e) => handleInputChange(e, "id")}
                  name="doctor_id"
                  placeholder="Enter Doctor ID:"
                  required
                />
              </div>
              <div className="update-doctor-input-group">
                <label htmlFor="doctor_speciality">
                  What are you Updating:{" "}
                </label>
                <select
                  value={updatedparam}
                  onChange={(e) => handleInputChange(e, "param")}
                >
                  <option value="">Select...</option>
                  <option value="doctor_name">Name</option>
                  <option value="speciality">speciality</option>
                </select>
              </div>
              <div className="update-doctor-input-group">
                <label htmlFor="doctor_updated_value">Updated Value: </label>
                <input
                  type="text"
                  id="doctor_updated_value"
                  value={updatedValue}
                  onChange={(e) => handleInputChange(e, "value")}
                  name="doctor_updated_value"
                  placeholder="Enter Updated Value:"
                  required
                />
              </div>

              <button type="submit" className="update-doctor-submit">
                Update
              </button>
              <p className="update-doctor-warning">{updateDoctorError}</p>
              <p className="update-doctor-successful">{updateDoctorMsg}</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateDoctor;
