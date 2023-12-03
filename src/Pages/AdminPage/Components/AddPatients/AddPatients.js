import React, { useState } from "react";
import axios from "axios";
import "./AddPatients.css";
function AddPatients() {
  const [showAddPatientBody, setShowAddPatientBody] = useState(false);
  const [patientName, setpatientName] = useState("");
  const [patientEmail, setpatientEmail] = useState("");
  const [patientPassword, setpatientPassword] = useState("");
  const [patientImage, setpatientImage] = useState("");
  const [patientage, setpatientage] = useState("");
  const [patientgender, setpatientgender] = useState("");
  const [patientDoctorId, setpatientDoctorId] = useState("");
  const [patientCurrentCondition, setpatientCurrentCondition] = useState("");
  const [patientMsg, setpatientMsg] = useState("");
  const [patientErrorMsg, setpatientErrorMsg] = useState("");
  function handleInputChange(e, type) {
    switch (type) {
      case "patient_name":
        setpatientName(e.target.value);
        break;
      case "patient_email":
        setpatientEmail(e.target.value);
        break;
      case "patient_password":
        setpatientPassword(e.target.value);
        break;
      case "patient_img":
        setpatientImage(e.target.value);
        break;
      case "patient_gender":
        setpatientgender(e.target.value);
        break;
      case "patient_age":
        setpatientage(e.target.value);
        break;
      case "patient_doctor":
        setpatientDoctorId(e.target.value);
        break;
      case "patient_current":
        setpatientCurrentCondition(e.target.value);
        break;

      default:
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      patient_name: patientName,
      patient_email: patientEmail,
      patient_password: patientPassword,
      patient_img: patientImage,
      patient_gender: patientgender,
      patient_age: patientage,
      patient_doctor: patientDoctorId,
      patient_current: patientCurrentCondition,
      user_role: "patient",
    };
    sendData(data);
  }
  function sendData(data) {
    axios
      .post("https://localhost/rayan_care/addPatient.php", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.message === "User added") {
          setpatientMsg("Added");
          reset();
        } else {
          setpatientErrorMsg(response.data.message);
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function reset() {
    setpatientName("");
    setpatientEmail("");
    setpatientPassword("");
    setpatientImage("");
    setpatientgender("");
    setpatientage("");
    setpatientDoctorId("");
    setpatientCurrentCondition("");
    setTimeout(() => {
      setpatientErrorMsg("");
      setpatientMsg("");
    }, 3000);
  }

  const toggleAddPatientBody = () => {
    setShowAddPatientBody(!showAddPatientBody);
  };
  return (
    <div className="add-patient">
      <div className="add-patient_header">
        <h3>Add a Patient</h3>
        <div onClick={toggleAddPatientBody}>&#9660;</div>
      </div>
      {showAddPatientBody && (
        <div className="add-patient_body">
          <div className="add-patient_box">
            <p>Add Patients:</p>
            <form onSubmit={handleSubmit}>
              <div className="add-patient-input-group">
                <label htmlFor="patient_name">Patient name: </label>
                <input
                  type="text"
                  id="patient_name"
                  name="patient_name"
                  value={patientName}
                  onChange={(e) => handleInputChange(e, "patient_name")}
                  placeholder="Enter Patient Name:"
                  required
                />
              </div>
              <div className="add-patient-input-group">
                <label htmlFor="patient_imagelink">Image link: </label>
                <input
                  type="text"
                  id="patient_imagelink"
                  name="patient_imagelink"
                  value={patientImage}
                  onChange={(e) => handleInputChange(e, "patient_img")}
                  placeholder="Enter Patient Speciality:"
                  required
                />
              </div>
              <div className="add-patient-input-group">
                <label htmlFor="patient_age">Age: </label>
                <input
                  type="text"
                  id="patient_age"
                  name="patient_age"
                  value={patientage}
                  onChange={(e) => handleInputChange(e, "patient_age")}
                  placeholder="Enter Patient Age:"
                  required
                />
              </div>
              <div className="add-patient-input-group">
                <label htmlFor="patient_gender">Gender: </label>
                <input
                  type="text"
                  id="patient_gender"
                  name="patient_gender"
                  value={patientgender}
                  onChange={(e) => handleInputChange(e, "patient_gender")}
                  placeholder="Enter Patient Gender:"
                  required
                />
              </div>
              <div className="add-patient-input-group">
                <label htmlFor="patient_doctor">Doctor: </label>
                <input
                  type="text"
                  id="patient_doctor"
                  value={patientDoctorId}
                  onChange={(e) => handleInputChange(e, "patient_doctor")}
                  name="patient_doctor"
                  placeholder="Enter Patient Doctor:"
                  required
                />
              </div>
              <div className="add-patient-input-group">
                <label htmlFor="patient_current_condition">
                  Current Condition:{" "}
                </label>
                <input
                  type="text"
                  id="patient_current_condition"
                  value={patientCurrentCondition}
                  onChange={(e) => handleInputChange(e, "patient_current")}
                  name="patient_current_condition"
                  placeholder="Enter Patient Current Condition:"
                  required
                />
              </div>
              <div className="add-patient-input-group">
                <label htmlFor="patient_email">Email: </label>
                <input
                  type="email"
                  id="patient_email"
                  value={patientEmail}
                  onChange={(e) => handleInputChange(e, "patient_email")}
                  name="patient_email"
                  placeholder="Enter Patient Email:"
                  required
                />
              </div>
              <div className="add-patient-input-group">
                <label htmlFor="patient_password">Patient Password: </label>
                <input
                  type="password"
                  id="patient_password"
                  value={patientPassword}
                  onChange={(e) => handleInputChange(e, "patient_password")}
                  name="patient_password"
                  placeholder="Enter Patient Password:"
                  required
                />
              </div>

              <button type="submit" className="add-patient-submit">
                Add
              </button>
              <p className="add-patient-warning">{patientMsg}</p>
              <p className="add-patient-successful">{patientErrorMsg}</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddPatients;
