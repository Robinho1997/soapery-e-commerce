import React from "react";
import Slideshow from "../components/Slideshow";
import Product from "../components/Product";
import productData from "../data/productData";
import { nanoid } from "nanoid";

function Homepage() {
  const productElements = productData.map((product) => {
    return (
      <Product
        key={nanoid()}
        img={product.img}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    );
  });
  return (
    <div>
      <Slideshow />
      <h1 className="header-products">Produkte</h1>
      <div className="product-grid">
     
      {productElements}
      </div>
    </div>
  );
}

export default Homepage;
