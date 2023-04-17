import React, { useContext, useState, useRef, useEffect } from "react";
import "../styles/navbar.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import CartItemComponent from "./CartItemComponent";

function Navbar() {
  const { cartItems, toggle, setToggle } = useContext(Context);
  const cartRef = useRef(null);

  function calculateTotalCost() {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.price;
    });
    return (Math.round(totalPrice * 100) / 100).toFixed(2);;
  }

  const handleCartClick = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCartClick);

    return () => {
      document.removeEventListener("mousedown", handleCartClick);
    };
  }, []);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };
  React.useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggle]);
  const CartElements = cartItems.map((item, index) => {
    return (
      <CartItemComponent
        key={nanoid()}
        name={item.name}
        img={item.img}
        price={item.price}
        info={item.info}
        id={nanoid()}
        index={index}
      />
    );
  });

  return (
    <nav className="navbar">
      <ul className="first-ul">
        <li>DE/EN</li>
        <li>
          <h1 className="navbar-header">SOAPERY</h1>
        </li>
        <li className="cart" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="number-cart-items">{cartItems.length}</span>
        </li>
      </ul>

      <ul className="second-ul">
        <li>
          <Link to={"/shop"}>SHOP</Link>
        </li>
        <li>
          <Link to={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"/stores"}>STORES</Link>
        </li>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
      </ul>

      <div
        className={toggle ? "sidebar-cart-div show" : "sidebar-cart-div"}
        ref={cartRef}
      >
        <h1 className="header-cart">Dein Einkaufskorb</h1>
        {cartItems.length > 0 ? (
          <div>
            {CartElements}
            <div className="bottom">
              <p className="total-cart-price">Summe {calculateTotalCost()}€</p>
              <p>Versandkosten & Die landesüblichen MwSt. wird abgeführt</p>
              <p>
                Glückwunsch, deine Bestellung ist in Deutschland & Österreich{" "}
                <strong>versandkostenfrei</strong>!
              </p>
              <button className="checkout-btn">CHECKOUT</button>
            </div>
          </div>
        ) : (
          <div className="empty-cart-message">
            <p> Dein Einkaufswagen ist aktuell leer.</p>
            <Link onClick={toggleSidebar} to={"/shop"}>
              Klicke hier um weiterzushoppen
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
