import React, { createContext, useState } from "react";
import productData from "./data/productData";
const Context = createContext()

function ContextProvider(props) {
    const [cartItems,setCartItems] = useState([])
    
    return (
        <Context.Provider value={{cartItems,setCartItems}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

