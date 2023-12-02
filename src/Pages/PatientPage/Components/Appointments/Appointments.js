import React, { useState } from "react";
import "./Appointments.css";
function Appointments({ patient }) {
  const [showAppointmentsBody, setShowAppointmentsBody] = useState(false);
  const toggleAppointmentsBody = () => {
    setShowAppointmentsBody(!showAppointmentsBody);
  };
  const today = new Date();
  return (
    <div className="appointments">
      <div className="appointments_header">
        <h3>
          {patient.patient_name.split(" ")[0].charAt(0).toUpperCase() +
            patient.patient_name.split(" ")[0].slice(1).toLowerCase()}
          's Appointments
        </h3>
        <div onClick={toggleAppointmentsBody}>&#9660;</div>
      </div>
      {showAppointmentsBody && (
        <div className="appointments_body">
          {patient.appointments.map((app, ind) => {
            const appd = new Date(app.slice(0, 15));
            return (
              <p
                className={
                  appd >= today
                    ? "appointment-date green"
                    : "appointment-date red"
                }
              >
                {app}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Appointments;
