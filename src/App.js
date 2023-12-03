import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorPage from "./Pages/DoctorPage/DoctorPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PatientPage from "./Pages/PatientPage/PatientPage";
import AdminPage from "./Pages/AdminPage/AdminPage";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <LandingPage />
                </React.Fragment>
              }
            />

            <Route
              path="/login"
              element={
                <React.Fragment>
                  <LoginPage />
                </React.Fragment>
              }
            />

            <Route
              path="/admin"
              element={
                <React.Fragment>
                  <AdminPage />
                </React.Fragment>
              }
            />
            <Route
              path="/patient"
              element={
                <React.Fragment>
                  <PatientPage />
                </React.Fragment>
              }
            />
            <Route
              path="/doctor"
              element={
                <React.Fragment>
                  <DoctorPage />
                </React.Fragment>
              }
            />
          </Routes>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
// return (
//   <Router>
//     <Routes>
//       <Route path="/" exact component={LandingPage} />
//       <Route path="/login" component={LoginPage} />
//       <Route path="/admin" component={AdminPage} />
//       <Route path="/patient" component={PatientPage} />
//       <Route path="/doctor" component={DoctorPage} />
//     </Routes>
//   </Router>
// );
