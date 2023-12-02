import React from "react";
import "./LandingPage.css";
import Header from "./Components/Header/Header.js";
import Hero from "./Components/Hero/Hero.js";
import HospitalInfo from "./Components/HospitalInfo/HospitalInfo.js";
import DoctorInfo from "./Components/DoctorInfo/DoctorInfo.js";
import Footer from "./Components/Footer/Footer.js";
import PatientInfo from "./Components/PatientInfo/PatientInfo.js";

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <HospitalInfo />
      <PatientInfo />
      <DoctorInfo />
      <Footer />
    </div>
  );
}

export default LandingPage;
