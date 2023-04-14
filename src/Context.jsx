import React, { createContext, useState } from "react";
import productData from "./data/productData";
const Context = createContext()

function ContextProvider(props) {
    const [cartItems,setCartItems] = useState([])

    function addToCart(item) {
        setCartItems(prev => [...prev,item])
    }

    return (
        <Context.Provider value={{cartItems,setCartItems,addToCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

