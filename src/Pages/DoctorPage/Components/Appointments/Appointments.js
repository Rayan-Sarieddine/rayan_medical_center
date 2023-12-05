import React, { useEffect, useState } from "react";
import "./Appointments.css";
import axios from "axios";
function Appointments({ doctor }) {
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
        .post("https://localhost/rayan_care/allDoctorAppointments.php", data, {
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
  async function acceptAppointment() {
    try {
      const response1 = await axios.get(
        "https://localhost/rayan_care/acceptAppointments.php"
      );
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  }
  async function rejectAppointment() {
    try {
      const response1 = await axios.get(
        "https://localhost/rayan_care/rejectAppointments.php"
      );
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  }
  async function finishAppointment() {
    try {
      const response1 = await axios.get(
        "https://localhost/rayan_care/finishAppointments.php"
      );
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  }

  return (
    <div className="appointments">
      <div className="appointments_header">
        <h3>
          Dr.{" "}
          {doctor.split(" ")[0].charAt(0).toUpperCase() +
            doctor.split(" ")[0].slice(1).toLowerCase()}
          's Appointments
        </h3>
        <div onClick={toggleAppointmentsBody}>&#9660;</div>
      </div>
      {showAppointmentsBody && (
        <div className="appointments_body">
          <table>
            <thead>
              <tr>
                <th>Appoitnment Date</th>
                <th>Status</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appoint, i) => {
                return (
                  <tr key={i} className={appoint.status_of_appointment}>
                    <td>{appoint.date_of_appointment}</td>
                    <td>{appoint.status_of_appointment}</td>
                    <td className="tb table-btn-accept">
                      <button
                        onClick={() => {
                          acceptAppointment();
                        }}
                      >
                        Accept
                      </button>
                    </td>
                    <td className="tb table-btn-reject">
                      <button
                        onClick={() => {
                          rejectAppointment();
                        }}
                      >
                        Reject
                      </button>
                    </td>
                    <td className="tb table-btn-finish">
                      <button
                        onClick={() => {
                          finishAppointment();
                        }}
                      >
                        Finish
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Appointments;
