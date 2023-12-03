import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleuserTypeChange = (event) => {
    setSelectedRole(event.target.value);
  };
  return (
    <div className="login-page">
      <div className="log-in_box">
        <form>
          <div class="input-group">
            <label for="role">Logging as:</label>
            <select
              id="role"
              name="role"
              onChange={handleuserTypeChange}
              required
            >
              <option value="">Select Role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="input-group">
            <label for="username">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email:"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password:"
              required
            />
          </div>
          <Link to={`/${selectedRole}`}>
            <button type="submit">Login</button>
          </Link>
          <p className="log-warning"></p>
          <p className="log-successful"></p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
