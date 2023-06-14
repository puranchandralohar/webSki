import React from "react";
import "./navbar.css";
import logo from "./logo/logo.png"

export const Navbar = () => {
  const menuLinks = [
    "Loan Programs",
    "Realtor Portal",
    "About us",
    "Reviews",
    "Eductaion",
  ];

  return (
    <div className="nav_container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav">
      <ul>
        {menuLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};
