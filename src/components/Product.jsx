import React, { useContext } from "react";
import "../styles/product.css";
import { Context } from "../Context";

function Product(props) {
  const {addToCart, germanLanguage } = useContext(Context);

  return (
    <div className="product">
      <img className="product-img" src={props.img} />
      <div className="product-info">
        <div className="product-info-top-section">
          <p className="product-name">{props.name}</p>
          <p className="product-price">{props.price} €</p>
        </div>
        <p className="product-description">{props.info}</p>
        <button className="product-btn" onClick={() => addToCart(props.object)}>
          {germanLanguage ? "IN DEN EINKAUFSKORB" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
}

export default Product;
