import React, { useContext } from "react";
import { nanoid } from "nanoid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productData from "../data/productData";
import Product from "../components/Product";
import "../styles/product.css";
import { Context } from "../Context";

function Shop() {
  const {germanLanguage} = useContext(Context)
  
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
      <h1 className="shop-header">{germanLanguage ? "PRODUKTE" : "PRODUCTS"}</h1>
      <div className="product-grid">{ProductElements}</div>
      <Footer />
    </div>
  );
}

export default Shop;
