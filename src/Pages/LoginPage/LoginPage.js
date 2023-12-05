import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

import axios from "axios";
function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [msg, setmsg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setmsg("");
    }, 5000);
  }, [msg]);
  const handleInputChange = function (e, type) {
    switch (type) {
      case "role":
        seterror("");
        setSelectedRole(e.target.value);
        if (e.target.value === "") {
          seterror("role was left blank");
        }
        break;
      case "email":
        seterror("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          seterror("email was left blank");
        }
        break;
      case "password":
        seterror("");
        setPassword(e.target.value);
        if (e.target.value === "") {
          seterror("password was left blank");
        }
        break;
      default:
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      type: selectedRole,
      email: email,
      password: password,
    };

    loginSubmit(data);
  };
  function loginSubmit(data) {
    if (email !== "" && password !== "" && selectedRole !== "") {
      axios
        .post(
          "https://localhost/rayan_medical_center/back_end/sign-in.php",
          data,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.message === "User found") {
            localStorage.setItem("user_id", response.data.user_id);
            window.location.href = `/${selectedRole}`;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      seterror("all fileds are required");
    }
  }
  return (
    <div className="login-page">
      <div className="log-in_box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="role">Logging as:</label>
            <select
              id="role"
              name="role"
              value={selectedRole}
              onChange={(e) => handleInputChange(e, "role")}
              required
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              placeholder="Enter Email:"
              onChange={(e) => handleInputChange(e, "email")}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              placeholder="Enter Password:"
              onChange={(e) => handleInputChange(e, "password")}
              required
            />
          </div>

          <button type="submit">LOG-IN</button>

          <p className="log-warning">{error}</p>
          <p className="log-successful">{msg}</p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
