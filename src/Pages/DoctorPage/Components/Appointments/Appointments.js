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
  const [appointmentsMsg, setAppointmentsMsg] = useState("");

  const fetchAppointmentsData = async () => {
    try {
      let data = { user_id: localStorage.getItem("user_id") };
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/allDoctorAppointments.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
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
  async function acceptAppointment(date, patient_id) {
    try {
      let data = { date: date, patient_id: patient_id };
      console.log(data);
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/acceptAppointment.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setAppointmentsMsg(response.data.message);
          setTimeout(() => {
            setAppointmentsMsg("");
          }, 1500);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  }
  async function rejectAppointment(date, patient_id) {
    try {
      let data = { date: date, patient_id: patient_id };
      console.log(data);
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/rejectAppointment.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setAppointmentsMsg(response.data.message);
          setTimeout(() => {
            setAppointmentsMsg("");
          }, 1500);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  }
  async function finishAppointment(date, patient_id) {
    try {
      let data = { date: date, patient_id: patient_id };
      console.log(data);
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/finishAppointment.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setAppointmentsMsg(response.data.message);
          setTimeout(() => {
            setAppointmentsMsg("");
          }, 1500);
        });
    } catch (error) {
      console.error("Error getting info:", error);
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
          <p className="app-msg">{appointmentsMsg}</p>
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
              {appointmentsData && (
                <>
                  {appointmentsData.map((appoint, i) => {
                    return (
                      <tr key={i} className={appoint.status_of_appointment}>
                        <td>{appoint.date_of_appointment}</td>
                        <td>{appoint.status_of_appointment}</td>
                        <td className="tb table-btn-accept">
                          <button
                            onClick={() => {
                              acceptAppointment(
                                appoint.date_of_appointment,
                                appoint.patient_id
                              );
                            }}
                          >
                            Accept
                          </button>
                        </td>
                        <td className="tb table-btn-reject">
                          <button
                            onClick={() => {
                              rejectAppointment(
                                appoint.date_of_appointment,
                                appoint.patient_id
                              );
                            }}
                          >
                            Reject
                          </button>
                        </td>
                        <td className="tb table-btn-finish">
                          <button
                            onClick={() => {
                              finishAppointment(
                                appoint.date_of_appointment,
                                appoint.patient_id
                              );
                            }}
                          >
                            Finish
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Appointments;
