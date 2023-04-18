import React, { useContext, useState, useRef, useEffect } from "react";
import "../styles/navbar.css";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context";
import CartItemComponent from "./CartItemComponent";

function Navbar() {
  const { cartItems, toggle, setToggle, germanLanguage, toggleLanguage } =
    useContext(Context);
  const cartRef = useRef(null);
  const navigate = useNavigate();
  const [checkoutBtnValue, setCheckoutBtnValue] = useState("CHECKOUT");

  function emptyCart() {
    setCheckoutBtnValue("ORDERING...");
    localStorage.removeItem("cart");
    setTimeout(() => {
      setCheckoutBtnValue("CHECKOUT");
    }, 4000);
    setTimeout(() => {
      alert("Thanks for your order!")
    }, 4200);
    setTimeout(() => {
      navigate("/");
      window.location.reload(true)
    }, 4300);
  }

  function calculateTotalCost() {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.price;
    });
    return (Math.round(totalPrice * 100) / 100).toFixed(2);
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
        <li className="language-toggle" onClick={toggleLanguage}>
          <span className={germanLanguage ? "strong" : ""}>DE</span>/
          <span className={germanLanguage ? "" : "strong"}>EN</span>
        </li>
        <li>
          <img className="logo-navbar" src="/public/soapery-high-resolution-logo-black-on-transparent-background.png"/>
        </li>
        <li className="cart" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="number-cart-items">{cartItems.length}</span>
        </li>
      </ul>

      <ul className="second-ul">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/shop"}>SHOP</Link>
        </li>
        <li>
          <Link to={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"/stores"}>STORES</Link>
        </li>
      </ul>

      {germanLanguage ? (
        <div
          className={toggle ? "sidebar-cart-div show" : "sidebar-cart-div"}
          ref={cartRef}
        >
          <h1 className="header-cart">Dein Einkaufskorb</h1>
          {cartItems.length > 0 ? (
            <div>
              {CartElements}
              <div className="bottom">
                <p className="total-cart-price">
                  Summe {calculateTotalCost()}€
                </p>
                <p className="cart-text">
                  Versandkosten & Die landesüblichen MwSt. wird abgeführt
                </p>
                <p className="cart-text">
                  Glückwunsch, deine Bestellung ist in Deutschland & Österreich
                  <strong> versandkostenfrei</strong>!
                </p>
                <button onClick={emptyCart} className="checkout-btn">
                  {checkoutBtnValue}
                </button>
                {checkoutBtnValue === "ORDERING..." && (
                  <iframe src="https://giphy.com/embed/SsTcO55LJDBsI" width="100%" height="560" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                )}
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
      ) : (
        <div
          className={toggle ? "sidebar-cart-div show" : "sidebar-cart-div"}
          ref={cartRef}
        >
          <h1 className="header-cart">Your Cart</h1>
          {cartItems.length > 0 ? (
            <div>
              {CartElements}
              <div className="bottom">
                <p className="total-cart-price">
                  Total {calculateTotalCost()}€
                </p>
                <p>Shipping & taxes calculated at checkout</p>
      <p>
                  Order for 29,90 €/39,90€ to get free shipping to
                  Germany/Austria.
                </p>
                <button onClick={emptyCart} className="checkout-btn">
                  {checkoutBtnValue}
                </button>
                {checkoutBtnValue === "ORDERING..." && (
                  <iframe src="https://giphy.com/embed/SsTcO55LJDBsI" width="100%" height="560" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                )}
              </div>
            </div>
          ) : (
            <div className="empty-cart-message">
              <p> Your cart is currently empty.</p>
              <Link onClick={toggleSidebar} to={"/shop"}>
                Click here to continue shopping.
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
