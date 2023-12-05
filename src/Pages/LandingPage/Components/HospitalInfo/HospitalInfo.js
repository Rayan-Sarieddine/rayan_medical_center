import React from "react";
import "./HospitalInfo.css";
function HospitalInfo() {
  return (
    <div className="hospital-info">
      <h2>Not forgetting about the Admin!</h2>
      <p>They are able to:</p>
      <div className="admin-features">
        <ul>
          <li>View, Add & Edit Doctors</li>
          <li>View, Add & Edit Patients</li>
          <li>View and assign rooms to patients</li>
        </ul>
      </div>
    </div>
  );
}

export default HospitalInfo;
