import React, { useContext } from "react";
import { nanoid } from "nanoid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productData from "../data/productData";
import Product from "../components/Product";
import "../styles/product.css";
import "../styles/shop.css";

function Shop() {
  let ProductElements = productData.map((product) => {
    return (
      <Product
        key={nanoid()}
        object={product}
        img={product.img}
        name={product.name}
        price={product.price}
        info={product.info}
      />
    );
  });
  return (
    <div className="shop-page">
      <Navbar />
      <img
        className="shop-header-img"
        src="https://images.unsplash.com/photo-1643123158251-3a66f53a4635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
      <h1 className="header">PRODUKTE</h1>
      <div className="product-grid">{ProductElements}</div>
      <Footer />
    </div>
  );
}

export default Shop;
