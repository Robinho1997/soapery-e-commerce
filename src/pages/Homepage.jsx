import React from "react";
import Slideshow from "../components/Slideshow";
import Product from "../components/Product";
import productData from "../data/productData";
import { nanoid } from "nanoid";
import "../styles/homepage.css";
import "../styles/footer.css";
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
          object={product}
          img={product.img}
          name={product.name}
          price={product.price}
          info={product.info}
        />
      );
    }
    return newArr;
  };
  return (
    <div className="home-page">
      <Navbar />
      <Slideshow />
      <h1 className="header-products">Bestseller</h1>
      <div className="product-grid">
        <ProductElements />
      </div>
      <div className="img-text-presentation-div">
        <img src="https://images.unsplash.com/photo-1643123158251-3a66f53a4635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <p className="text">
          SOAPERY bietet perfekt abgestimmte Pflege kombiniert mit herrlichen
          Düften und verantwortungsvollen Inhaltsstoffen. Unsere Seifen werden
          sorgfältig mit natürlichen Inhaltsstoffen hergestellt die sowohl sanft
          zur Haut als auch umweltfreundlich sind. Wir sind stolz darauf eine
          breite Palette von Seifen anbieten zu können.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
