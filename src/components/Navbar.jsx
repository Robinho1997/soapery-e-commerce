import React from "react";
import "../styles/navbar.css"
import { Link } from "react-router-dom";

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
        <li><Link to={"/shop"}>SHOP</Link></li>
        <li><Link to={"/about"}>ABOUT</Link></li>
        <li><Link to={"/stores"}>STORES</Link></li>
        <li><Link to={"/soapery"}>#SOAPERY</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
