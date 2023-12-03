import React, { useState } from "react";
import "./AddDoctors.css";
import axios from "axios";
function AddDoctors() {
  const [showAddDoctorBody, setShowAddDoctorBody] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorPassword, setDoctorPassword] = useState("");
  const [doctorSpeciality, setDoctorSpeciality] = useState("");
  const [doctorMsg, setDoctorMsg] = useState("");
  const [doctorErrorMsg, setDoctorErrorMsg] = useState("");
  function handleInputChange(e, type) {
    switch (type) {
      case "name":
        setDoctorName(e.target.value);
        break;
      case "email":
        setDoctorEmail(e.target.value);
        break;
      case "password":
        setDoctorPassword(e.target.value);
        break;
      case "speciality":
        setDoctorSpeciality(e.target.value);
        break;
      default:
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      doctor_name: doctorName,
      speciality: doctorSpeciality,
      user_email: doctorEmail,
      user_password: doctorPassword,
      user_role: "doctor",
    };
    sendData(data);
  }
  function sendData(data) {
    axios
      .post("https://localhost/rayan_care/addDoctor.php", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.message === "User added") {
          setDoctorMsg("Added");
          reset();
        } else {
          setDoctorErrorMsg(response.data.message);
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function reset() {
    setDoctorName("");
    setDoctorEmail("");
    setDoctorPassword("");
    setDoctorSpeciality("");
    setTimeout(() => {
      setDoctorErrorMsg("");
      setDoctorMsg("");
    }, 3000);
  }
  const toggleAddDoctorBody = () => {
    setShowAddDoctorBody(!showAddDoctorBody);
  };
  return (
    <div className="add-doctor">
      <div className="add-doctor_header">
        <h3>Add a Doctor</h3>
        <div onClick={toggleAddDoctorBody}>&#9660;</div>
      </div>
      {showAddDoctorBody && (
        <div className="add-doctor_body">
          <div className="add-doctor_box">
            <p>Add Doctors:</p>
            <form onSubmit={handleSubmit}>
              <div className="add-doctor-input-group">
                <label htmlFor="doctor_name">Doctor name: </label>
                <input
                  type="text"
                  id="doctor_name"
                  value={doctorName}
                  name="doctor_name"
                  onChange={(e) => handleInputChange(e, "name")}
                  placeholder="Enter Doctor Name:"
                  required
                />
              </div>
              <div className="add-doctor-input-group">
                <label htmlFor="doctor_speciality">Doctor Speciality: </label>
                <input
                  type="text"
                  id="doctor_speciality"
                  value={doctorSpeciality}
                  name="doctor_speciality"
                  onChange={(e) => handleInputChange(e, "speciality")}
                  placeholder="Enter Doctor Speciality:"
                  required
                />
              </div>
              <div className="add-doctor-input-group">
                <label htmlFor="doctor_email">Doctor Email: </label>
                <input
                  type="email"
                  id="doctor_email"
                  value={doctorEmail}
                  name="doctor_email"
                  onChange={(e) => handleInputChange(e, "email")}
                  placeholder="Enter Doctor Email:"
                  required
                />
              </div>
              <div className="add-doctor-input-group">
                <label htmlFor="doctor_password">Doctor Password: </label>
                <input
                  type="password"
                  id="doctor_password"
                  value={doctorPassword}
                  onChange={(e) => handleInputChange(e, "password")}
                  name="doctor_password"
                  placeholder="Enter Doctor Password:"
                  required
                />
              </div>

              <button type="submit" className="add-doctor-submit">
                Add
              </button>
              <p className="add-doctor-warning">{doctorMsg}</p>
              <p className="add-doctor-successful">{doctorErrorMsg}</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddDoctors;
