import React from "react";
import "./App.css";
import Logo from "./assets/logo.png";

export default function Header() {
  return (
    <>
      <div className="header_container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
    </>
  );
}
