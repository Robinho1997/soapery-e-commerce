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
    
    function removeFromCart(index) {
        setCartItems(prevItems => {
            const newCartItems = [...prevItems]
            newCartItems.splice(index,1)
            return newCartItems
        })
    }

    return (
        <Context.Provider value={{cartItems,setCartItems,addToCart, removeFromCart, toggle, setToggle}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

