import React from "react";

function CartItemComponent(props) {
    return(
        <div className="cart-item-div">
            <p>{props.name}</p>
            <div className="cart-item-flex">
                <img className="cart-item-img" src={props.img}/>
                <div className="right-side-cart-item">
                    <p>{props.price} €</p>
                    <p>{props.info}</p>
                    <button className="remove-btn">ENTFERNEN</button>
                </div>
            </div>
        </div>
    )
}

export default CartItemComponent