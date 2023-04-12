import React from "react";
import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="first-ul">
        <li>DE/EN</li>
        <li>
          <h1>SOAPERY</h1>
        </li>
        <li className="cart">
          <span className="material-symbols-outlined">local_mall</span>
        </li>
      </ul>

      <ul className="second-ul">
        <li>SHOP</li>
        <li>ABOUT</li>
        <li>STORES</li>
        <li>#SOAPERY</li>
      </ul>
    </nav>
  );
}

export default Navbar;
