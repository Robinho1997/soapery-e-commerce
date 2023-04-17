import React, { useContext } from "react";
import productData from "../data/productData";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Context } from "../Context";
import "../styles/productpage.css";

function Productpage() {
  const { addToCart, germanLanguage } = useContext(Context);
  const { name } = useParams();

  let product = productData.filter((item) => item.name === name);
  product = product[0];

  return (
    <div className="product-page">
      <Navbar />
      <div className="product-page-content">
        <div className="product-page-img-btn">
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
          <img className="product-page-img" src={product.img} />
        </div>
        <div className="product-page-text-info">
          <h1 className="name-product-page">{product.name}</h1>
          <p className="price-product-page">{product.price} €</p>
          <p className="shipping-info">{germanLanguage ?"inkl. MwSt. / zzgl. Versandkosten" : "incl. VAT excl. shipping costs"}</p>
          <p className="shipping-time">{germanLanguage ? "Lieferzeit 3-5 Werktage" : "Delivery time 3-5 working days"}</p>
          <p className="info-product-page">{product.info}</p>
          <p className="description-product-page">
            {germanLanguage
              ? product.germanDescription
              : product.englishDescription}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Productpage;
