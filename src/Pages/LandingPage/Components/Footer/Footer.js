import React from "react";
import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>&copy; Copyright {year} Rayan Sarieddine [FSW 26] | SE Factory</p>
    </div>
  );
}

export default Footer;
