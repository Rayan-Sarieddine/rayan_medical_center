import React, { useState } from "react";
import "./BookAppointment.css";
import axios from "axios";
function BookAppointments({ patient }) {
  const [showBookAppointmentsBody, setShowBookAppointmentsBody] =
    useState(false);
  const toggleBookAppointmentsBody = () => {
    setShowBookAppointmentsBody(!showBookAppointmentsBody);
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [msg, setmsg] = useState("");

  const handleDateSelection = (event) => {
    const d = event.target.value;
    const newd = new Date(d);
    setSelectedDate(newd.toLocaleString());
  };

  function submitappointment() {
    let data = {
      user_id: localStorage.getItem("user_id"),
      appointment_date: selectedDate,
    };
    console.log(data);
    try {
      axios
        .post("https://localhost/rayan_care/bookAppointment.php", data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setmsg(response.data.message);
          setTimeout(() => {
            setmsg("");
          }, 1500);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  }
  return (
    <div className="book-appointments">
      <div className="book-appointments_header">
        <h3>
          {patient.patient_name.split(" ")[0].charAt(0).toUpperCase() +
            patient.patient_name.split(" ")[0].slice(1).toLowerCase()}
          , Book your future appointments here!
        </h3>
        <div onClick={toggleBookAppointmentsBody}>&#9660;</div>
      </div>
      {showBookAppointmentsBody && (
        <div className="book-appointments_body">
          <h2>Book Appointments</h2>
          <label for="book-appointmentDateTime">
            Select Appointment's Date and Time:
          </label>
          <input
            type="datetime-local"
            id="book-appointmentDateTime"
            name="book-appointmentDateTime"
            onChange={handleDateSelection}
          />

          <div className="selected-date">
            Selected Date: {selectedDate ? selectedDate : "No date selected"}
          </div>
          <p className="appointment-msg">{msg}</p>
          <button
            className="appointment-btn"
            onClick={() => {
              submitappointment();
            }}
          >
            Book
          </button>
        </div>
      )}
    </div>
  );
}

export default BookAppointments;
