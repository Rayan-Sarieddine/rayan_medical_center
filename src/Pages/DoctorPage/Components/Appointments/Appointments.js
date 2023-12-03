import React, { useState } from "react";
import "./Appointments.css";
function Appointments({ doctor }) {
  const [showAppointmentsBody, setShowAppointmentsBody] = useState(false);
  const toggleAppointmentsBody = () => {
    setShowAppointmentsBody(!showAppointmentsBody);
  };
  const today = new Date();
  return (
    <div className="appointments">
      <div className="appointments_header">
        <h3>
          {doctor.doctor_name.split(" ")[0].charAt(0).toUpperCase() +
            doctor.doctor_name.split(" ")[0].slice(1).toLowerCase()}
          's Appointments
        </h3>
        <div onClick={toggleAppointmentsBody}>&#9660;</div>
      </div>
      {showAppointmentsBody && (
        <div className="appointments_body">
          {doctor.appointments.map((app, ind) => {
            const appd = new Date(app.slice(0, 15));
            return (
              <div>
                <p
                  className={
                    appd >= today
                      ? "appointment-date green"
                      : "appointment-date red"
                  }
                >
                  {app}
                </p>
                {appd >= today && (
                  <>
                    <button type="submit" className="Accept-btn1">
                      Accept
                    </button>
                    <button type="submit" className="Reject-btn1">
                      Reject
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Appointments;
