import React from "react";
import productData from "../data/productData";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Productpage() {
    const {name} = useParams()
    let product = productData.filter(item => item.name === name)
    product = product[0]
    console.log(product)
    return(
        <div className="product-page">
            <Navbar/>
            <h1>{product.name}</h1>
            <p>{product.price}€</p>
            <img src={product.img}/>
            <Footer/>
        </div>
    )
}

export default Productpage