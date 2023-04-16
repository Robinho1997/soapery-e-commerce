import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [toggle, setToggle] = useState(false);

  function addToCart(item) {
    setCartItems((prev) => [...prev, item]);
    setToggle(!toggle);
  }

  useEffect(() => {
    let prev_items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(prev_items);
    setIsInitiallyFetched(true);
  }, []);

  useEffect(() => {
    if (isInitiallyFetched) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function removeFromCart(index) {
    setCartItems((prevItems) => {
      const newCartItems = [...prevItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        toggle,
        setToggle,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
