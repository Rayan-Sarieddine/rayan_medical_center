import React, { useState } from "react";
import "./Medicine.css";
import axios from "axios";
function Medicine({ doctor }) {
  const [showMedicineBody, setShowMedicineBody] = useState(false);
  const [prescribedPatientId, setprescribedPatientId] = useState("");
  const [prescribedMedine, setprescribedMedine] = useState("");
  const [prescribedDetails, setprescribedDetails] = useState("");
  const [prescribemsg, setprescribedmsg] = useState("");
  const toggleMedicineBody = () => {
    setShowMedicineBody(!showMedicineBody);
  };
  function submitPrescription(e) {
    e.preventDefault();
    let data = {
      patient_id: prescribedPatientId,
      medicine: prescribedMedine,
      details: prescribedDetails,
    };
    console.log(data);
    try {
      axios
        .post("https://localhost/rayan_care/prescribe.php", data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setprescribedmsg(response.data.message);
          setTimeout(() => {
            setprescribedmsg("");
          }, 1500);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  }
  function handlechange(e, type) {
    switch (type) {
      case "id":
        setprescribedPatientId(e.target.value);
        break;
      case "medicine":
        setprescribedMedine(e.target.value);
        break;
      case "details":
        setprescribedDetails(e.target.value);
        break;
      default:
    }
  }
  return (
    <div className="medicine">
      <div className="medicine_header">
        <h3>
          Dr.
          {" " +
            doctor.split(" ")[0].charAt(0).toUpperCase() +
            doctor.split(" ")[0].slice(1).toLowerCase() +
            " "}
          Medicine prescription
        </h3>
        <div onClick={toggleMedicineBody}>&#9660;</div>
      </div>
      {showMedicineBody && ( // Renders the body if showBody is true
        <div className="medicine_body">
          <div className="medicine_box">
            <p>Prescribe medicine for your patients:</p>
            <form onSubmit={submitPrescription}>
              <div class="input-group">
                <label for="patient_id">Patient ID: </label>
                <input
                  type="text"
                  id="patient_id"
                  name="patient_id"
                  value={prescribedPatientId}
                  onChange={(e) => {
                    handlechange(e, "id");
                  }}
                  placeholder="Enter Patient ID:"
                  required
                />
              </div>
              <div class="input-group">
                <label for="prescribed_medicine">Prescribe Medicine: </label>
                <input
                  type="text"
                  id="prescribed_medicine"
                  name="prescribed_medicine"
                  value={prescribedMedine}
                  onChange={(e) => {
                    handlechange(e, "medicine");
                  }}
                  placeholder="Enter Medicine:"
                  required
                />
              </div>
              <div class="input-group">
                <label for="prescribe_details">Details: </label>
                <input
                  type="text"
                  id="prescribe_details"
                  name="prescribe_details"
                  value={prescribedDetails}
                  onChange={(e) => {
                    handlechange(e, "details");
                  }}
                  placeholder="Enter pills-times/Day:"
                  required
                />
              </div>
              <button type="submit">Prescribe</button>

              <p className="medicine-successful">{prescribemsg}</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Medicine;
