import React, { useState, useEffect } from "react";
import "./Appointments.css";
import axios from "axios";
function Appointments({ patient }) {
  const [showAppointmentsBody, setShowAppointmentsBody] = useState(false);
  const toggleAppointmentsBody = () => {
    setShowAppointmentsBody(!showAppointmentsBody);
  };
  const today = new Date();
  const data = { user_id: localStorage.getItem("user_id") };
  const [appointmentsData, setappointmentsData] = useState("s");

  const fetchAppointmentsData = async () => {
    try {
      axios
        .post("https://localhost/rayan_care/allAppointments.php", data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setappointmentsData(response.data.appointments_data);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  };
  useEffect(() => {
    fetchAppointmentsData();
  }, []);
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
      {appointmentsData && (
        <>
          {showAppointmentsBody && (
            <div className="appointments_body">
              <table>
                <thead>
                  <tr>
                    <th>Appoitnment Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointmentsData.map((appoint, i) => {
                    return (
                      <tr key={i} className={appoint.status_of_appointment}>
                        <td>{appoint.date_of_appointment}</td>
                        <td>{appoint.status_of_appointment}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default Appointments;
