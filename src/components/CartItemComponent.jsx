import React, { useContext } from "react";
import { Context } from "../Context";

function CartItemComponent(props) {
  const { removeFromCart, germanLanguage} = useContext(Context);
  return (
    <div className="cart-item-div">
      <div className="cart-item-flex">
        <img className="cart-item-img" src={props.img} />
        <div className="right-side-cart-item">
          <p>{props.name}</p>
          <p>{props.price} €</p>
          <p>{props.info}</p>
          <button
            onClick={() => removeFromCart(props.index)}
            className="remove-btn"
          >
             {germanLanguage ? "Entfernen":"Remove"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemComponent;
