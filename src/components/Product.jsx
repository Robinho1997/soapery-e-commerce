import React, { useContext } from "react";
import "../styles/product.css";
import { Context } from "../Context";
import { Link } from "react-router-dom";

function Product(props) {
  const { addToCart, germanLanguage } = useContext(Context);

  return (
    <div className="product">
      <Link to={`/shop/${props.name}`}>
        <img className="product-img" src={props.img} />
      </Link>
      <div className="product-info">
        <div className="product-info-top-section">
          <Link className="product-name" to={`/shop/${props.name}`}>
            {props.name}
          </Link>
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
