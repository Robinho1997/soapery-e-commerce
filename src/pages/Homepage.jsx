import React from "react";
import Slideshow from "../components/Slideshow";
import Product from "../components/Product";
import productData from "../data/productData";
import { nanoid } from "nanoid";
import "../styles/homepage.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Homepage() {
  const ProductElements = () => {
    let newArr = [];
    for (let i = 0; i < 3; i++) {
      let product = productData[i];
      newArr.push(
        <Product
          key={nanoid()}
          img={product.img}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      );
    }
    return newArr;
  };
  return (
    <div>
     <Navbar/>
      <Slideshow />
      <h1 className="header-products">Bestseller</h1>
      <div className="product-grid">
        <ProductElements />
      </div>
      <div className="product-showcase-div">
        <p className="background-container">s</p>
        <p className="text">
          SOAPERY bietet perfekt abgestimmte Pflege, kombiniert mit herrlichen
          Düften und verantwortungsvollen Inhaltsstoffen. Unsere Seifen werden
          sorgfältig mit natürlichen Inhaltsstoffen hergestellt, die sowohl
          sanft zur Haut als auch umweltfreundlich sind. Wir sind stolz darauf,
          eine breite Palette von Seifen anbieten zu können.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;
