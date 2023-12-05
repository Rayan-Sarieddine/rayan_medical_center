import React, { useState, useEffect } from "react";
import "./DoctorPage.css";
import axios from "axios";
import WelcomeDr from "./Components/WelcomeDr/WelcomeDr";
import DoctorPatients from "./Components/DoctorPatients/DoctorPatients";
import Medicine from "./Components/Medicine/Medicine";
import Appointments from "./Components/Appointments/Appointments";

function DoctorPage() {
  // const doctor = {
  //   doctor_name: "Charbel Massoud",
  //   speciality: "heart",
  //   patients: [0, 1, 2],
  //   appointments: [
  //     "January 1, 2022 at 7:30 PM",
  //     "May 15, 2023 at 12:30 PM",
  //     "January 1, 2024 at 10:00 AM",
  //   ],
  // };
  const data = { user_id: localStorage.getItem("user_id") };
  const [doctor, setdoctor] = useState(null);
  const fetchdoctorData = async () => {
    try {
      axios
        .post("https://localhost/rayan_care/getDoctor.php", data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setdoctor(response.data.doctorData);
          console.log(response.data.doctorData);
        });
    } catch (error) {
      console.error("Error getting info:", error);
    }
  };
  useEffect(() => {
    fetchdoctorData();
  }, []);
  return (
    <div className="doctor-page">
      {doctor ? (
        <>
          <WelcomeDr doctor={doctor.doctor_name} />
          <DoctorPatients doctor={doctor.doctor_name} />
          <Medicine doctor={doctor.doctor_name} />
          <Appointments doctor={doctor.doctor_name} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DoctorPage;
