import React from "react";
import logo from "../assets/Logo.png";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="scissors Logo" />
      <ul>
        <li>
          <a href="">My URLs</a>
        </li>
        <li>
          <a href="#Features">Features</a>
        </li>
        <li>
          <a href="#Pricing">Pricing</a>
        </li>
        <li>
          <a href="">Analytics</a>
        </li>
        <li>
          <a href="#FAQ">FAQs</a>
        </li>
      </ul>
      <div className="Login">
        <p>Log in</p>
        <button>
          {" "}
          <a href="#form">Try for free</a>{" "}
        </button>
      </div>
    </div>
  );
}

export default Header;
