import React from "react";
import "../styles/product.css"

function Product(props) {
    return (
        <div className="product">
            <img className="product-img" src={props.img}/>
            <div className="product-info">
                <div className="product-info-top-section">
                    <p className="product-name">{props.name}</p>
                    <p className="product-price">{props.price} €</p>
                </div>
                <p className="product-description">{props.description}</p>
                <button className="product-btn">IN DEN EINKAUFSKORB</button>
            </div>

        </div>
    )
}

export default Product