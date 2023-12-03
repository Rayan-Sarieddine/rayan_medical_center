import React, { useState } from "react";
import "./Medicine.css";
function Medicine({ doctor }) {
  const [showMedicineBody, setShowMedicineBody] = useState(false);
  const toggleMedicineBody = () => {
    setShowMedicineBody(!showMedicineBody);
  };
  return (
    <div className="medicine">
      <div className="medicine_header">
        <h3>
          Dr.
          {" " +
            doctor.doctor_name.split(" ")[0].charAt(0).toUpperCase() +
            doctor.doctor_name.split(" ")[0].slice(1).toLowerCase() +
            " "}
          Medicine prescription
        </h3>
        <div onClick={toggleMedicineBody}>&#9660;</div>
      </div>
      {showMedicineBody && ( // Renders the body if showBody is true
        <div className="medicine_body">
          <div className="medicine_box">
            <p>Prescribe medicine for your patients:</p>
            <form>
              <div class="input-group">
                <label for="patient_id">Patient ID: </label>
                <input
                  type="text"
                  id="patient_id"
                  name="patient_id"
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
                  placeholder="Enter Medicine:"
                  required
                />
              </div>
              <button type="submit">Authorize</button>
              <p className="medicine-warning"></p>
              <p className="medicine-successful"></p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Medicine;
