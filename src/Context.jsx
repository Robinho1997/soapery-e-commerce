import React, { createContext, useState } from "react";
import productData from "./data/productData";
const Context = createContext()

function ContextProvider(props) {
    const [cartItems,setCartItems] = useState([])
    const [toggle, setToggle] = useState(false);

    function addToCart(item) {
        setCartItems(prev => [...prev,item])
        setToggle(!toggle)
    }

    return (
        <Context.Provider value={{cartItems,setCartItems,addToCart, toggle, setToggle}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

